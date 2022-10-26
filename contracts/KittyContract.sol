// SPDX-License-Identifier: MIT
pragma solidity  >=0.4.22 <0.9.0;

import "./IERC721.sol";
import "./Ownable.sol";
import "./IERC721Receiver.sol";

contract KittyContract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant name = "RadKitty";
    string public constant symbol = "RK";

    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

    /*
     *     bytes4(keccak256('balanceOf(address)')) == 0x70a08231
     *     bytes4(keccak256('ownerOf(uint256)')) == 0x6352211e
     *     bytes4(keccak256('approve(address,uint256)')) == 0x095ea7b3
     *     bytes4(keccak256('getApproved(uint256)')) == 0x081812fc
     *     bytes4(keccak256('setApprovalForAll(address,bool)')) == 0xa22cb465
     *     bytes4(keccak256('isApprovedForAll(address,address)')) == 0xe985e9c5
     *     bytes4(keccak256('transferFrom(address,address,uint256)')) == 0x23b872dd
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256)')) == 0x42842e0e
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) == 0xb88d4fde
     *
     *     => 0x70a08231 ^ 0x6352211e ^ 0x095ea7b3 ^ 0x081812fc ^
     *        0xa22cb465 ^ 0xe985e9c ^ 0x23b872dd ^ 0x42842e0e ^ 0xb88d4fde == 0x80ac58cd
     */
    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;

    /*
     *     bytes4(keccak256('supportsInterface(bytes4)'));
     */
    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;

    event Birth(
        address owner, 
        uint256 kittenId, 
        uint256 mumId, 
        uint256 dadId, 
        uint256 genes 
        );

    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties;

    mapping(uint256 => address) public kittyIndexToOwner;
    mapping(address => uint256) ownershipTokenCount;

    mapping(uint256 => address) public kittyIndexToApproved;
    mapping(address => mapping (address => bool)) private _operatorApprovals;

    uint256 public gen0Counter;

    constructor() {
        _createKitty(0, 0, 0, 1122334455667788990011, address(0));
    }

    function breed(uint256 _dadId, uint256 _mumId) public returns (uint256){
        require(_owns(msg.sender, _dadId), "The user doesn't own the token");
        require(_owns(msg.sender, _mumId), "The user doesn't own the token");

        ( uint256 dadDna,,,,uint256 DadGeneration ) = getKitty(_dadId);

        ( uint256 mumDna,,,,uint256 MumGeneration ) = getKitty(_mumId);
        
        uint256 newDna = _mixDna(dadDna, mumDna);

        uint256 kidGen = 0;
        if (DadGeneration < MumGeneration){
            kidGen = MumGeneration + 1;
            kidGen /= 2;
        } else if (DadGeneration > MumGeneration){
            kidGen = DadGeneration + 1;
            kidGen /= 2;
        } else{
            kidGen = MumGeneration + 1;
        }

        _createKitty(_mumId, _dadId, kidGen, newDna, msg.sender);
        return newDna;

    }

    function supportsInterface(bytes4 _interfaceId) external pure returns (bool) {
        return (_interfaceId == _INTERFACE_ID_ERC721 || _interfaceId == _INTERFACE_ID_ERC165);
    }

    function approve(address _to, uint256 _tokenId) public {
        require(_owns(msg.sender, _tokenId));

        _approve(_tokenId, _to);
        emit Approval(msg.sender, _to, _tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public {
        require(operator != msg.sender);
        
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        require(tokenId < kitties.length); //Token must exist

        return kittyIndexToApproved[tokenId];
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _operatorApprovals[owner][operator];
    }

  function getKittyByOwner(address _owner) external view returns(uint[] memory) {
    uint[] memory result = new uint[](ownershipTokenCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < kitties.length; i++) {
      if (kittyIndexToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public {
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) public {
        require( _isApprovedOrOwner(msg.sender, _from, _to, _tokenId) );
        _safeTransfer(_from, _to, _tokenId, _data);
    }

    function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
        _transfer(_from, _to, _tokenId);
        require(_checkERC721Support(_from, _to, _tokenId, _data));
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public {
      require(_to != address(0));
        require(msg.sender == _from || _approvedFor(msg.sender, _tokenId) || isApprovedForAll(_from, msg.sender));
        require(_owns(_from, _tokenId));
        require(_tokenId < kitties.length);
        
        //_transfer(msg.sender, _to, _tokenId); //<=Old code
        
        require(_isApprovedOrOwner(msg.sender, _from, _to, _tokenId));

        _transfer(_from, _to, _tokenId); //Newer code
    }




    function getKitty(uint256 _id) public view returns (
        uint256 genes,
        uint256 birthTime,
        uint256 mumId,
        uint256 dadId,
        uint256 generation
    )
    {
        Kitty storage kitty = kitties[_id];

        birthTime = uint256(kitty.birthTime);
        mumId = uint256(kitty.mumId);
        dadId = uint256(kitty.dadId);
        generation = uint256(kitty.generation);
        genes = kitty.genes;
    }

  // Counts the number of cats the contract owner has created.

    function createKittyGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require(gen0Counter < CREATION_LIMIT_GEN0);

        gen0Counter++;

        //Gen0 have no owners - owned by the contract
        return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256){
        Kitty memory _kitty = Kitty({
            genes: uint256(_genes),
            birthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        kitties.push(_kitty);
        uint256 newKittenId =  kitties.length - 1;

        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newKittenId);

        return newKittenId;
    }

    function balanceOf(address owner) external view returns (uint256 balance) {
        return ownershipTokenCount[owner];
    }

    function totalSupply() public view returns (uint256 total) {
        return kitties.length;
    }

    function ownerOf(uint256 _tokenId) external view returns (address owner) {
        return kittyIndexToOwner[_tokenId];
    }

    function transfer(address _to, uint256 _tokenId) external {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));

        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer( address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;

        kittyIndexToOwner[_tokenId] = _to;

        if(_from != address(0)) {
            ownershipTokenCount[_from]--;
            delete kittyIndexToApproved[_tokenId];
        }

        emit Transfer(_from, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return kittyIndexToOwner[_tokenId] == _claimant;
    }

    function _approve(uint256 _tokenId, address _approved) internal {
        kittyIndexToApproved[_tokenId] = _approved;
    }

    function _approvedFor(address _claimant, uint _tokenId) internal view returns (bool) {
        return kittyIndexToApproved[_tokenId] == _claimant;
    }

    function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns (bool) {
        if(!_isContract(_to)){
            return true;
        }
        
        //Call onERC721Received in thte _to contract
        bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
        //Check return value
        return returnData == MAGIC_ERC721_RECEIVED;


    }

    function _isContract(address _to) view internal returns (bool) {
        uint32 size;
        assembly{
            size := extcodesize(_to)
        }
        return size > 0;
    }

    function _isApprovedOrOwner(address _spender, address _from, address _to, uint256 _tokenId) internal view returns (bool) {
        require(_tokenId < kitties.length); //Token must exist
        require(_to != address(0)); //TO address is not zero address
        require(_owns(_from, _tokenId)); //From owns the token
        
        //spender is from OR spender is approved for tokenId OR spender is operator for from
        return (_spender == _from || _approvedFor(_spender, _tokenId) || isApprovedForAll(_from, _spender));
    }

    function _mixDna( uint256 _mumDna, uint256 _dadDna) public view returns(uint256) {
        uint256[11] memory geneArray;
        uint16 random = uint16(block.timestamp % 65535);
        
        uint256 i = 1;
        uint256 index = 10;

        for(i = 1; i <=1024; i = i * 2){
            if(random & i != 0){
                geneArray[index] = uint16(_mumDna % 100);
            } else{
                geneArray[index] = uint16(_dadDna % 100);
            }
            _mumDna = _mumDna / 100;            
            _dadDna = _dadDna / 100;

            if(i != 1024){index = index -1;}
        }

        uint256 newGene;
        for(i = 0; i < 11; i++){
            newGene = newGene + geneArray[i];
            if(i !=10){
                newGene = newGene * 100;
            }
        }
        return newGene;

    //    1.  0000000000000001 = 1
    //    2.  0000000000000010 = 2
    //    3.  0000000000000100 = 4
    //    4.  0000000000001000 = 8
    //    5.  0000000000010000 = 16
    //    6.  0000000000100000 = 32
    //    7.  0000000001000000 = 64
    //    8.  0000000010000000 = 128
    //    9.  0000000000000001 = 256
    //    10. 0000000000000001 = 512
    //    11. 0000000000000001 = 1024
    //    12. 0000000000000001 = 2048
    //    13. 0000000000000001 = 4096
    //    14. 0000000000000001 = 8192
    //    15. 0000000000000001 = 16384
    //    16. 0000000000000001 = 32768


    }



 

}


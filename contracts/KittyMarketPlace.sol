// SPDX-License-Identifier: MIT
pragma solidity  >=0.4.22 <0.9.0;

import "./KittyContract.sol";
import "./Ownable.sol";



contract KittyMarketPlace is Ownable {
    KittyContract private _kittyContract;

    struct Offer {
        address payable seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] offers;

    event MarketTransaction(string TxType, address owner, uint256 tokenId);
    
    mapping(uint256 => Offer) tokenIdToOffer;

    function setKittyContract(address _kittyContractAddress) public onlyOwner {
        _kittyContract = KittyContract(_kittyContractAddress);
    }

    constructor(address _kittyContractAddress) {
        setKittyContract(_kittyContractAddress);
    }

    function getOffer(uint _tokenId) public view returns (address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        Offer storage offer = tokenIdToOffer[_tokenId];
        return (
            offer.seller,
            offer.price,
            offer.index,
            offer.tokenId,
            offer.active
        );
    }

    function getAllTokenOnSale() external view returns(uint256[] memory listOfOffers) {
        uint256 totalOffers = offers.length;

        if(totalOffers == 0) {
            return new uint256[](0);
        } else {

            uint256[] memory result = new uint256[](totalOffers); //Size 1 (of Array)

            uint256 offerId;

            for (offerId = 0; offerId < totalOffers; offerId++) {
                if(offers[offerId].active == true) {
                    result[offerId] = offers[offerId].tokenId;
                }
            }
            return result;
        }
    }

    function _ownsKitty(address _address, uint256 _tokenId) internal view returns(bool) {
        return (_kittyContract.ownerOf(_tokenId) == _address);
    }

    //Create New Offer for the given tokenId and price
    function setOffer(uint256 _price, uint256 _tokenId) public {
        require(_ownsKitty(msg.sender, _tokenId), "You are not the owner of that Kitty");
        require(tokenIdToOffer[_tokenId].active == false, "You cannot sell the same offer twice");
        require(_kittyContract.isApprovedForAll(msg.sender, address(this)), "Contract needs to be appoved to transfer kitty in the future");

        Offer memory _offer = Offer({
            seller: payable(msg.sender),
            price: _price,
            active: true,
            tokenId: _tokenId,
            index: offers.length
        });

        tokenIdToOffer[_tokenId] = _offer;
        offers.push(_offer);

        emit MarketTransaction("Create offer", msg.sender, _tokenId);
    }

    //Remove existing offer
    function removeOffer(uint256 _tokenId) public {
       
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(offer.seller == msg.sender, "You are not the seller of that Kitty");

        delete tokenIdToOffer[_tokenId];
        offers[offer.index].active = false;
        
        emit MarketTransaction("Remove Offer", msg.sender, _tokenId);
    }

    //Accept offer and buy Kitty
    function buyKitty(uint256 _tokenId) public payable {
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(msg.value == offer.price, "The price is incorrect");
        require(tokenIdToOffer[_tokenId].active == true, "Not active");

        //Important to delete Kitty from mapping BEFORE paying out to prevent re-entry attacks
        delete tokenIdToOffer[_tokenId];
        offers[offer.index].active = false;

        //Transfer funds to the seller
        // TO DO: make this logic pull instead of push 
        if(offer.price > 0){
            offer.seller.transfer(offer.price);
        }

        //Transfer ownership of the Kitty
        _kittyContract.transferFrom(offer.seller, msg.sender, _tokenId);

        emit MarketTransaction("Buy", msg.sender, _tokenId); 
    }

}
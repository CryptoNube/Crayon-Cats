var web3 = new Web3(Web3.givenProvider);


var instance;
var user;
var contractAddress = "0x3B6BA696F25d8E204ca19CCb8a92E7e9658A2d13";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
       instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
       user = accounts[0]; 

       console.log(instance);
/* 
*   Listen for the `Birth` event, and update the UI
*   This event is generate in the KittyBase contract
*   when the _createKitty internal method is called
*/
       instance.events.Birth().on('data', function(event){
           console.log(event);
           let owner = event.returnValues.owner;
           let kittenId = event.returnValues.kittenId;
           let mumId = event.returnValues.mumId;
           let dadId = event.returnValues.dadId;
           let genes = event.returnValues.genes
           $("#kittyCreation").css("display", "block");
           $("#kittyCreation").text("owner:" + owner 
                                 +" kittId:" + kittenId
                                 +" mumId:" + mumId
                                 +" dadId:" + dadId
                                 +" genes:" + genes, 'success')
       })
       .on('error', console.error);

    });

});

function createKitty(){
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txhash){
        if(error)
             console.log(err);
        else
             console.log(txhash);
        
    })

}

async function getKitties(){  

    //    instance.methods.getKittyByOwner(user);
      let arrayId;
      let kitty;
      try{
        arrayId = await instance.methods.getKittyByOwner(contractAddress).call();
      } catch(err){
        console.log(err);
      }
      for (i = 0; i < arrayId.length; i++){
        kitty = await instance.methods.getKitty(arrayId[i]).call();
        console.log(kitty);
        appendcat(kitty[0], i)
      }
      console.log(arrayId);
      console.log(kitty);
    
    }


function displayKittyInfo(owner, kittyId, mumId, dadId, genes) {
    $("kittytable").removeClass('hidden')
    $("#kittyOnwer").text(owner);
    $("#kittyId").text(kittyId);
    $("#kittyMum").text(mumId);
    $("#kittyDad").text(dadId);
    $("#kittyGenes").text(genes);
    }    

//append cats for catalog
async function appendKitty(id) {
    var kitty = await instance.methods.getKitty(id).call()
    appendCat(kitty[0], id, kitty['generation'])
  }
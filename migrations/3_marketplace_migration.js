const KittyContract = artifacts.require("KittyContract");
const KittyMarketPlace = artifacts.require("KittyMarketPlace");

module.exports = function (deployer) {
  deployer.deploy(KittyMarketPlace, KittyContract.address);
};
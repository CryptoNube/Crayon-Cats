const KittyExchange = artifacts.require("KittyExchange");

module.exports = function (deployer) {
  deployer.deploy(KittyExchange);
};

const Hosts = artifacts.require("Hosts");

module.exports = function (deployer) {
  deployer.deploy(Hosts);
};

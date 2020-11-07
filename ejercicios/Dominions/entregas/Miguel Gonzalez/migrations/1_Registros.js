const Registros = artifacts.require("Registros");

module.exports = function (deployer) {
  deployer.deploy(Registros);
};

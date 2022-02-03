require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_PRIVATE_KEY}`,      
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`]
    },
  }
};

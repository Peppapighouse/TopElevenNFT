// require("@nomicfoundation/hardhat-toolbox");

/**
* @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();


module.exports = {
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
      gasPrice: 20000000000,
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/ade02318d6184bb084d538432264d11f`,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: [process.env.PRIVATE_KEY]
    },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/82a5d25345574d8ab9fd1f4d5f353ba0`,
    //   accounts: [process.env.PRI_KEY],
    // },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ETH_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    ethw: {
      chainId: 10001,
      url: `https://mainnet.ethereumpow.org`,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.EXPLORE_API_KEY
    // apiKey: 'UVE477915DMJIFSVTM5V3FI9Z17WUBGE2M', // eth
    // apiKey: '9E36GDSJK15GYXXN85186T5GDQI32B29MF', // bsc
    // apiKey: "7A5TAKHWI24BHVT5V8CSUDRPVAEM5KUWWP", // polygon
  },
  // etherscan: {
  //   apiKey: {
  //     rinkeby: process.env.EXPLORE_API_KEY,
  //   },
  //   customChains: [
  //     {
  //       network: "ethw",
  //       chainId: 10001,
  //       urls: {
  //         apiURL: "https://www.oklink.com/api",
  //         browserURL: "https://mainnet.ethwscan.com"
  //       }
  //     }
  //   ]
  // },

  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  mocha: {
    timeout: 40000
  }
};

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "zkSyncTestnet",   
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {},
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // goerli: {
    //   chainId: 5,
    //   url: `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`,
    //   accounts: `privateKey`,
    //   // ethNetwork: "goerli",
    // },
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [SEPOLIA_PRIVATE_KEY]
    // },

    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: `https://eth-goerli.g.alchemy.com/v2/proccess.env.ALCHEMY_API_KEY`,
      zksync: true,
    },
  },   
  etherscan: {
    apiKey: {
      goerli: "process.env.apiKeyEtherscan"
    }
  },
};

export default config;
 

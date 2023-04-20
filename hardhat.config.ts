import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync-toolbox";

const config: HardhatUserConfig = {
  // defaultNetwork: "zkTestnet", --network zkTestnet
  zksolc: {
    version: "1.3.5",
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
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`,
      accounts: `privateKey`,
      // ethNetwork: "goerli",
    },

    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
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
 
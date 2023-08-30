/* eslint-disable import/no-extraneous-dependencies */
import '@nomicfoundation/hardhat-chai-matchers';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-docgen';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  docgen: {
    clear: true,
    path: '.docs',
  },
  gasReporter: {
    enabled: true,
  },
  namedAccounts: {
    Alice: {
      default: 1,
    },
    Bob: {
      default: 2,
    },
    Charlie: {
      default: 3,
    },
    Darth: {
      default: 4,
    },
    Eve: {
      default: 5,
    },
    deployer: {
      default: 0,
      localhost: 0,
    },
  },
  networks: {
    localhost: {
      chainId: 1337,
      initialBaseFeePerGas: 0,
      url: 'http://127.0.0.1:8545',
    }
  },
  solidity: {
    settings: {
      outputSelection: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '*': {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '*': ['storageLayout'],
        },
      },
    },
    version: '0.8.18',
  },
  typechain: {
    outDir: 'typechain/typechain-types',
    target: 'ethers-v5',
  },
  verify: {
    etherscan: {
      apiKey: '',
    },
  },
};

export default config;

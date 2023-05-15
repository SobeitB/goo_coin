import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

import * as dotenv from 'dotenv';
dotenv.config();  

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
  if (!PRIVATE_KEY) {
    throw new Error("Please set ZKS_PRIVATE_KEY in the environment variables.");
  }

// npx hardhat deploy-zksync --script deploy --network zkTestnet
export default async function (hre: HardhatRuntimeEnvironment) {

    const wallet = new Wallet(PRIVATE_KEY);

    const deployer = new Deployer(hre, wallet);

    const artifact = await deployer.loadArtifact("GOOtoken");

    const deploymentFee = await deployer.estimateDeployFee(artifact, []);

    const tx = await deployer.zkWallet.deposit({
      to: deployer.zkWallet.address,
      token: utils.ETH_ADDRESS,
      amount: deploymentFee.mul(2)
    });

    await tx.wait();

    const contract = await deployer.deploy(artifact, []);
    const addr = contract.address;
    console.log(`contract deployed to address: ${addr}`);
}

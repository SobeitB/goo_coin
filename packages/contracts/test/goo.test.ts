import { loadFixture, ethers, expect, time, anyValue } from "./setup";
import type { GOOtoken } from "../typechain-types";

const Web3 = require('web3');
const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/avwG8CtqafoSeoU77DbE3iGX0zXTfFmE');

const privateKey = '0xd7a3582f87580828ff6334498e1aa6fb7dd58ccf01d58fe2ee7c108fa62196e9';
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

describe("GOOtoken", function() {
    async function deploy() {
        const [ owner, signer ] = await ethers.getSigners();

        const Factory = await ethers.getContractFactory("GOOtoken");
        const gooToken: GOOtoken = await Factory.deploy();

        return { owner, signer, gooToken }
    }
    it("burnAll", async function () {
        const { owner, signer, gooToken } = await loadFixture(deploy);
        
        const messageHash = web3.utils.keccak256(web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [account.address, await gooToken.balanceOf(account.address), 'burnAll']));

        const signature = await web3.eth.sign(messageHash, account.address);
      
        return signature;
    })
});




// async function getSignature() {
//     const {gooToken } = await loadFixture(deploy);
//   const messageHash = web3.utils.keccak256(web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [account.address, await balanceOf(account.address), 'burnAll']));

//   const signature = await web3.eth.sign(messageHash, account.address);

//   return signature;
// }
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICasino, ICasinoInterface } from "../ICasino";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "quiantityPoints",
        type: "uint256",
      },
    ],
    name: "AmountDropped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "color",
        type: "string",
      },
    ],
    name: "CollorDropped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "Draw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfWinner",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
    ],
    name: "Loser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfWinner",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Winner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "intruder",
        type: "address",
      },
    ],
    name: "addToBlackList",
    type: "event",
  },
  {
    inputs: [],
    name: "RollTheDice",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
    ],
    name: "SpinTheDrum",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "intruder",
        type: "address",
      },
    ],
    name: "addToBL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICasino__factory {
  static readonly abi = _abi;
  static createInterface(): ICasinoInterface {
    return new utils.Interface(_abi) as ICasinoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICasino {
    return new Contract(address, _abi, signerOrProvider) as ICasino;
  }
}


export const ERC20_GOO = {
      address:"",
      abi:[
            {
                  "inputs": [],
                  "stateMutability": "nonpayable",
                  "type": "constructor"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "end",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokensLeft",
                              "type": "uint256"
                        }
                  ],
                  "name": "AirdropEnded",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "start",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "end",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokens",
                              "type": "uint256"
                        }
                  ],
                  "name": "AirdropStart",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "spender",
                              "type": "address"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "value",
                              "type": "uint256"
                        }
                  ],
                  "name": "Approval",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "end",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokensLeft",
                              "type": "uint256"
                        }
                  ],
                  "name": "PresaleEnded",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "start",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "end",
                              "type": "uint256"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokens",
                              "type": "uint256"
                        }
                  ],
                  "name": "PresaleStart",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "value",
                              "type": "uint256"
                        }
                  ],
                  "name": "Transfer",
                  "type": "event"
            },
            {
                  "inputs": [],
                  "name": "airdropPool",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "spender",
                              "type": "address"
                        }
                  ],
                  "name": "allowance",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "amount",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "spender",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                        }
                  ],
                  "name": "approve",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "account",
                              "type": "address"
                        }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "_user",
                              "type": "address"
                        },
                        {
                              "internalType": "bool",
                              "name": "_banned",
                              "type": "bool"
                        }
                  ],
                  "name": "blacklist",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                        }
                  ],
                  "name": "blacklisted",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                        }
                  ],
                  "name": "bought",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "bytes",
                              "name": "_sign",
                              "type": "bytes"
                        }
                  ],
                  "name": "burnAll",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "referral",
                              "type": "address"
                        }
                  ],
                  "name": "claim",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "success",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                        {
                              "internalType": "uint8",
                              "name": "",
                              "type": "uint8"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "spender",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "subtractedValue",
                              "type": "uint256"
                        }
                  ],
                  "name": "decreaseAllowance",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "endTime",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "spender",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "addedValue",
                              "type": "uint256"
                        }
                  ],
                  "name": "increaseAllowance",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                        {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "presalePool",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "bytes",
                              "name": "_sign",
                              "type": "bytes"
                        }
                  ],
                  "name": "recoverSigner",
                  "outputs": [
                        {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                        }
                  ],
                  "stateMutability": "pure",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "startTime",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                        {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "tokenPrice",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "referral",
                              "type": "address"
                        }
                  ],
                  "name": "tokenSale",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "payable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                        }
                  ],
                  "name": "transfer",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                        }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "viewAirdrop",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        },
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        },
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "viewSale",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        },
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        },
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "withdrawAll",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            }
      ]
}
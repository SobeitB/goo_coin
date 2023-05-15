/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MyToken, MyTokenInterface } from "../MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_cachedChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "ShortString",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b506040518060400160405280600781526020016626bcaa37b5b2b760c91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b81525081600390816200009b9190620003cd565b506004620000aa8282620003cd565b505050620000c8600583620001c760201b620006811790919060201c565b60e052620000e4816006620001c7602090811b6200068117901c565b61010052815160208084019190912061012052815190820120610140524660a052620001746101205161014051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250600880546001600160a01b03191633908117909155620001c190620001a1600090565b620001ae90600a620005ac565b620001bb906064620005c4565b62000217565b62000669565b6000602083511015620001e757620001df83620002de565b905062000211565b82620001fe836200032160201b620006b21760201c565b906200020b9082620003cd565b5060ff90505b92915050565b6001600160a01b038216620002735760405162461bcd60e51b815260206004820152601760248201527f4163636f756e742063616e6e6f74206265207a65726f2100000000000000000060448201526064015b60405180910390fd5b8060026000828254620002879190620005de565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600080829050601f815111156200030c578260405163305a27a960e01b81526004016200026a9190620005f4565b8051620003198262000644565b179392505050565b90565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200035457607f821691505b6020821081036200037557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032457600081815260208120601f850160051c81016020861015620003a45750805b601f850160051c820191505b81811015620003c557828155600101620003b0565b505050505050565b81516001600160401b03811115620003e957620003e962000329565b6200040181620003fa84546200033f565b846200037b565b602080601f831160018114620004395760008415620004205750858301515b600019600386901b1c1916600185901b178555620003c5565b600085815260208120601f198616915b828110156200046a5788860151825594840194600190910190840162000449565b5085821015620004895787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620004f0578160001904821115620004d457620004d462000499565b80851615620004e257918102915b93841c9390800290620004b4565b509250929050565b600082620005095750600162000211565b81620005185750600062000211565b81600181146200053157600281146200053c576200055c565b600191505062000211565b60ff84111562000550576200055062000499565b50506001821b62000211565b5060208310610133831016604e8410600b841016171562000581575081810a62000211565b6200058d8383620004af565b8060001904821115620005a457620005a462000499565b029392505050565b6000620005bd60ff841683620004f8565b9392505050565b808202811582820484141762000211576200021162000499565b8082018082111562000211576200021162000499565b600060208083528351808285015260005b81811015620006235785810183015185820160400152820162000605565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620003755760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611386620006d26000396000610a7801526000610a500152600061043a015260008181610275015261040f015260006109ab01526000818161016101526109d5015260006109ff01526113866000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a457c2d711610071578063a457c2d71461024a578063a9059cbb1461025d578063d28d885214610270578063d505accf14610297578063dd62ed3e146102aa57600080fd5b806370a08231146101eb5780637ecebe001461021457806384b0196e1461022757806395d89b411461024257600080fd5b806323b872dd116100e957806323b872dd14610199578063313ce567146101ac5780633644e515146101bb57806339509351146101c357806340c10f19146101d657600080fd5b806306fdde031461011b578063095ea7b31461013957806315b980781461015c57806318160ddd14610191575b600080fd5b6101236102bd565b6040516101309190610faa565b60405180910390f35b61014c610147366004610fe0565b61034f565b6040519015158152602001610130565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610130565b600254610183565b61014c6101a736600461100a565b610369565b60405160008152602001610130565b61018361038d565b61014c6101d1366004610fe0565b61039c565b6101e96101e4366004610fe0565b6103be565b005b6101836101f9366004611046565b6001600160a01b031660009081526020819052604090205490565b610183610222366004611046565b6103e3565b61022f610401565b6040516101309796959493929190611061565b61012361048a565b61014c610258366004610fe0565b610499565b61014c61026b366004610fe0565b61050b565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b6101e96102a53660046110f7565b610519565b6101836102b836600461116a565b610656565b6060600380546102cc9061119d565b80601f01602080910402602001604051908101604052809291908181526020018280546102f89061119d565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b5050505050905090565b60003361035d8185856106b5565b60019150505b92915050565b6000336103778582856107ba565b61038285858561082d565b506001949350505050565b600061039761099e565b905090565b60003361035d8185856103af8383610656565b6103b991906111d1565b6106b5565b6008546001600160a01b031633146103d557600080fd5b6103df8282610ac9565b5050565b6001600160a01b038116600090815260076020526040812054610363565b6000606080828080836104357f00000000000000000000000000000000000000000000000000000000000000006005610b88565b6104607f00000000000000000000000000000000000000000000000000000000000000006006610b88565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6060600480546102cc9061119d565b600033816104a78286610656565b9050838110156104fe5760405162461bcd60e51b815260206004820152601f60248201527f616c6c6f77616e63652073686f756c64206265203e3d2073756256616c75650060448201526064015b60405180910390fd5b61038282868684036106b5565b60003361035d81858561082d565b834211156105535760405162461bcd60e51b8152602060048201526007602482015266195e1c1a5c995960ca1b60448201526064016104f5565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105828c610c2c565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105dd82610c54565b905060006105ed82878787610c81565b9050896001600160a01b0316816001600160a01b03161461063f5760405162461bcd60e51b815260206004820152600c60248201526b3737ba1030b71037bbb732b960a11b60448201526064016104f5565b61064a8a8a8a6106b5565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600060208351101561069d5761069683610ca9565b9050610363565b816106a88482611256565b5060ff9050610363565b90565b6001600160a01b0383166107035760405162461bcd60e51b81526020600482015260156024820152744f776e65722063616e6e6f74206265207a65726f2160581b60448201526064016104f5565b6001600160a01b0382166107595760405162461bcd60e51b815260206004820152601760248201527f5370656e6465722063616e6e6f74206265207a65726f2100000000000000000060448201526064016104f5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006107c68484610656565b90506000198114610827578181101561081a5760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e7420616c6c6f77616e636560501b60448201526064016104f5565b61082784848484036106b5565b50505050565b6001600160a01b0383166108835760405162461bcd60e51b815260206004820152601960248201527f46726f6d2063616e6e6f74206265207a65726f2061646472210000000000000060448201526064016104f5565b6001600160a01b0382166108d95760405162461bcd60e51b815260206004820152601760248201527f546f2063616e6e6f74206265207a65726f20616464722100000000000000000060448201526064016104f5565b6001600160a01b038316600090815260208190526040902054818110156109385760405162461bcd60e51b8152602060048201526013602482015272696e73756666696369656e742066756e64732160681b60448201526064016104f5565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610827565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156109f757507f000000000000000000000000000000000000000000000000000000000000000046145b15610a2157507f000000000000000000000000000000000000000000000000000000000000000090565b610397604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6001600160a01b038216610b1f5760405162461bcd60e51b815260206004820152601760248201527f4163636f756e742063616e6e6f74206265207a65726f2100000000000000000060448201526064016104f5565b8060026000828254610b3191906111d1565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b606060ff8314610b9b5761069683610cec565b818054610ba79061119d565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd39061119d565b8015610c205780601f10610bf557610100808354040283529160200191610c20565b820191906000526020600020905b815481529060010190602001808311610c0357829003601f168201915b50505050509050610363565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b6000610363610c6161099e565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000610c9287878787610d2b565b91509150610c9f81610def565b5095945050505050565b600080829050601f81511115610cd4578260405163305a27a960e01b81526004016104f59190610faa565b8051610cdf82611316565b179392505050565b505050565b60606000610cf983610f3c565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610d625750600090506003610de6565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610db6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ddf57600060019250925050610de6565b9150600090505b94509492505050565b6000816004811115610e0357610e0361133a565b03610e0b5750565b6001816004811115610e1f57610e1f61133a565b03610e6c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104f5565b6002816004811115610e8057610e8061133a565b03610ecd5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104f5565b6003816004811115610ee157610ee161133a565b03610f395760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104f5565b50565b600060ff8216601f81111561036357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610f8a57602081850181015186830182015201610f6e565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610fbd6020830184610f64565b9392505050565b80356001600160a01b0381168114610fdb57600080fd5b919050565b60008060408385031215610ff357600080fd5b610ffc83610fc4565b946020939093013593505050565b60008060006060848603121561101f57600080fd5b61102884610fc4565b925061103660208501610fc4565b9150604084013590509250925092565b60006020828403121561105857600080fd5b610fbd82610fc4565b60ff60f81b881681526000602060e08184015261108160e084018a610f64565b8381036040850152611093818a610f64565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b818110156110e5578351835292840192918401916001016110c9565b50909c9b505050505050505050505050565b600080600080600080600060e0888a03121561111257600080fd5b61111b88610fc4565b965061112960208901610fc4565b95506040880135945060608801359350608088013560ff8116811461114d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561117d57600080fd5b61118683610fc4565b915061119460208401610fc4565b90509250929050565b600181811c908216806111b157607f821691505b602082108103610c4e57634e487b7160e01b600052602260045260246000fd5b8082018082111561036357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b601f821115610ce757600081815260208120601f850160051c8101602086101561122f5750805b601f850160051c820191505b8181101561124e5782815560010161123b565b505050505050565b815167ffffffffffffffff811115611270576112706111f2565b6112848161127e845461119d565b84611208565b602080601f8311600181146112b957600084156112a15750858301515b600019600386901b1c1916600185901b17855561124e565b600085815260208120601f198616915b828110156112e8578886015182559484019460019091019084016112c9565b50858210156113065787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80516020808301519190811015610c4e5760001960209190910360031b1b16919050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212201a5c0b43eab920bdd6318e4280188e435471928b30d42cc97099d8f5f72053c564736f6c63430008120033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}
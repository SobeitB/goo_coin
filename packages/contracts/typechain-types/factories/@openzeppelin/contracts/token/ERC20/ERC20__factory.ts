/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "subtractedValue",
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
  "0x00020000000000020008000000000002000100000001035500000060011002700000017a0010019d0000008001000039000000400010043f0000000101200190000000410000c13d0000000001000031000000040110008c000003240000413d0000000101000367000000000101043b000000e0011002700000017f0210009c0000014a0000a13d000001800210009c0000016c0000213d000001840210009c000001ca0000613d000001850210009c000002100000613d000001860110009c000003240000c13d0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000000310004c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d0000000405000039000000000405041a000000010640019000000001014002700000007f0210018f00000000010260190000001f0210008c00000000020000190000000102002039000000000224013f0000000102200190000003330000c13d000000400200043d0000000003120436000000000660004c000003430000c13d000001000500008a000000000454016f0000000000430435000000000110004c00000020040000390000000004006019000003500000013d0000000001000416000000000110004c000003240000c13d00000000020000310000001f01200039000000200a00008a0000000004a1016f000000400100043d0000000003140019000000000443004b000000000400001900000001040040390000017b0530009c0000037e0000213d00000001044001900000037e0000c13d000000400030043f0000001f0320018f000000010400036700000005052002720000005f0000613d000000000600001900000005076002100000000008710019000000000774034f000000000707043b00000000007804350000000106600039000000000756004b000000570000413d000000000630004c0000006e0000613d0000000505500210000000000454034f00000000055100190000000303300210000000000605043300000000063601cf000000000636022f000000000404043b0000010003300089000000000434022f00000000033401cf000000000363019f00000000003504350000017c03000041000000400420008c000000000400001900000000040340190000017c05200197000000000650004c000000000300a0190000017c0550009c000000000304c019000000000330004c000003240000c13d00000000340104340000017b0540009c000003240000213d000000000221001900000000041400190000001f054000390000017c06000041000000000725004b000000000700001900000000070680190000017c055001970000017c08200197000000000985004b0000000006008019000000000585013f0000017c0550009c00000000050700190000000005066019000000000550004c000003240000c13d00000000050404330000017b0650009c0000037e0000213d0000003f065000390000000006a6016f000000400b00043d00000000066b00190000000007b6004b000000000700001900000001070040390000017b0860009c0000037e0000213d00000001077001900000037e0000c13d000000400060043f000000000c5b043600000020065000390000000007460019000000000727004b000003240000213d000000000750004c000000ab0000613d000000000700001900000020077000390000000008b70019000000000947001900000000090904330000000000980435000000000857004b000000a40000413d00000000046b0019000000000004043500000000030304330000017b0430009c000003240000213d00000000011300190000001f031000390000017c04000041000000000523004b000000000500001900000000050480190000017c033001970000017c06200197000000000763004b0000000004008019000000000363013f0000017c0330009c00000000030500190000000003046019000000000330004c000003240000c13d00000000030104330000017b0430009c0000037e0000213d0000003f043000390000000004a4016f000000400700043d0000000004470019000000000574004b000000000500001900000001050040390000017b0640009c0000037e0000213d00000001055001900000037e0000c13d000000400040043f0000000004370436000700000004001d00000020043000390000000005140019000000000225004b000003240000213d00040000000c001d00080000000b001d00050000000a001d000000000230004c000000e20000613d000000000200001900000020022000390000000005720019000000000612001900000000060604330000000000650435000000000532004b000000db0000413d0000000001470019000000000001043500000008010000290000000001010433000600000001001d0000017b0110009c0000037e0000213d000100000007001d0000000301000039000300000001001d000000000101041a000000010210019000000001011002700000007f0310018f0000000001036019000200000001001d0000001f0110008c00000000010000190000000101002039000000010110018f000000000112004b000003330000c13d0000000201000029000000200110008c000001180000413d000000030100002900000000001004350000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000017d011001c7000080100200003905e305de0000040f0000000102200190000003240000613d00000006030000290000001f023000390000000502200270000000200330008c0000000002004019000000000301043b00000002010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b000001180000813d000000000002041b0000000102200039000000000312004b000001140000413d00000006010000290000001f0110008c000004290000a13d000000030100002900000000001004350000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000017d011001c7000080100200003905e305de0000040f000000010220019000000005020000290000000806000029000003240000613d000000060300002900000000032301700000002002000039000000000101043b000001380000613d0000002002000039000000000400001900000000056200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b000001300000413d0000000604000029000000000343004b000001460000813d00000006030000290000000303300210000000f80330018f000000010400008a000000000334022f000000000343013f000000080400002900000000024200190000000002020433000000000232016f000000000021041b0000000601000029000000010110021000000001011001bf000004370000013d000001870210009c000001a30000a13d000001880210009c000002340000613d000001890210009c0000024f0000613d0000018a0110009c000003240000c13d0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000000310004c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d000000400100043d000000120200003900000000002104350000017a020000410000017a0310009c000000000102801900000040011002100000018e011001c7000005e40001042e000001810210009c0000029e0000613d000001820210009c000002f00000613d000001830110009c000003240000c13d0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000400310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000001020003670000000401200370000000000101043b0000018d0310009c000003240000213d0000002402200370000000000302043b0000018d0230009c000003240000213d00000000001004350000000101000039000000200010043f0000004002000039000800000002001d0000000001000019000700000003001d05e304b30000040f00000007020000290000000000200435000000200010043f0000000001000019000000080200002905e304b30000040f000000000101041a000000400200043d00000000001204350000017a010000410000017a0320009c000000000102401900000040011002100000018e011001c7000005e40001042e0000018b0210009c000003130000613d0000018c0110009c000003240000c13d0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000400310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000001010003670000000402100370000000000202043b0000018d0320009c000003240000213d0000002401100370000000000301043b000000000100041105e305720000040f0000000101000039000000400200043d00000000001204350000017a010000410000017a0320009c000000000102401900000040011002100000018e011001c7000005e40001042e0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000400310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000004010000390000000101100367000000000101043b000800000001001d0000018d0110009c000003240000213d0000000001000411000600000001001d00000000001004350000000101000039000700000001001d000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000003240000613d000000000101043b00000008020000290000000000200435000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000003240000613d000000000101043b000000000101041a00000024020000390000000102200367000000000202043b0000000003120019000000000123004b000000000100001900000001010040390000000101100190000003930000613d000001950100004100000000001004350000001101000039000000040010043f0000019601000041000005e5000104300000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000200310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000004010000390000000101100367000000000101043b0000018d0210009c000003240000213d0000000000100435000000200000043f0000004002000039000000000100001905e304b30000040f000000000101041a000000400200043d00000000001204350000017a010000410000017a0320009c000000000102401900000040011002100000018e011001c7000005e40001042e0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000000310004c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d0000000201000039000000000101041a000000400200043d00000000001204350000017a010000410000017a0320009c000000000102401900000040011002100000018e011001c7000005e40001042e0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000600310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000001010003670000000402100370000000000402043b0000018d0240009c000003240000213d0000002402100370000000000202043b000800000002001d0000018d0220009c000003240000213d0000004401100370000000000101043b000600000001001d00000000004004350000000101000039000500000001001d000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c70000801002000039000700000004001d05e305de0000040f0000000102200190000003240000613d000000000101043b0000000002000411000400000002001d0000000000200435000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f00000007030000290000000102200190000003240000613d000000000101043b000000000201041a000000010100008a000000000112004b000003ac0000c13d00000000010300190000000802000029000000060300002905e304df0000040f000000400100043d000000050200002900000000002104350000017a020000410000017a0310009c000000000102801900000040011002100000018e011001c7000005e40001042e0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000400310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000001010003670000000402100370000000000202043b000800000002001d0000018d0220009c000003240000213d0000002401100370000000000101043b000700000001001d0000000001000411000500000001001d00000000001004350000000101000039000600000001001d000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000003240000613d000000000101043b00000008020000290000000000200435000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000003240000613d000000000101043b000000000101041a0000000703000029000000000231004b0000039f0000813d000000400100043d000000640210003900000190030000410000000000320435000000440210003900000191030000410000000000320435000000240210003900000025030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e5000104300000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000400310008c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003240000c13d00000001010003670000000402100370000000000202043b0000018d0320009c000003240000213d0000002401100370000000000301043b000000000100041105e304df0000040f0000000101000039000000400200043d00000000001204350000017a010000410000017a0320009c000000000102401900000040011002100000018e011001c7000005e40001042e0000000001000416000000000110004c000003240000c13d000000040100008a00000000011000310000017c02000041000000000310004c000000000300001900000000030240190000017c01100197000000000410004c000000000200a0190000017c0110009c00000000010300190000000001026019000000000110004c000003260000613d0000000001000019000005e5000104300000000303000039000000000203041a000000010420019000000001012002700000007f0510018f000000000601001900000000060560190000001f0560008c00000000050000190000000105002039000000000552013f0000000105500190000003390000613d000001950100004100000000001004350000002201000039000000040010043f0000019601000041000005e500010430000000800060043f000000000440004c000003690000c13d000001000300008a000000000232016f000000a00020043f000000000160004c000000c001000039000000a001006039000003780000013d0000000000500435000000000410004c0000000004000019000003500000613d000001940500004100000000040000190000000006430019000000000705041a000000000076043500000001055000390000002004400039000000000614004b000003490000413d0000003f01400039000000200300008a000000000331016f0000000001230019000000000331004b000000000400001900000001040040390000017b0310009c0000037e0000213d00000001034001900000037e0000c13d000000400010043f000800000001001d05e304c90000040f000000080400002900000000014100490000017a020000410000017a0310009c00000000010280190000017a0340009c000000000204401900000040022002100000006001100210000000000121019f000005e40001042e0000000000300435000000a001000039000000000260004c000003840000613d0000019e0200004100000000040000190000000003040019000000000402041a000000a005300039000000000045043500000001022000390000002004300039000000000564004b0000036f0000413d000000c0013000390000001f01100039000000200200008a000000000121016f0000019f02100041000001a00220009c000003840000813d000001950100004100000000001004350000004101000039000000040010043f0000019601000041000005e500010430000800000001001d000000400010043f000000800200003905e304c90000040f000000080400002900000000014100490000017a020000410000017a0310009c00000000010280190000017a0340009c000000000204401900000040022002100000006001100210000000000121019f000005e40001042e0000000601000029000000080200002905e305720000040f000000400100043d000000070200002900000000002104350000017a020000410000017a0310009c000000000102801900000040011002100000018e011001c7000005e40001042e00000000033100490000000501000029000000080200002905e305720000040f000000400100043d000000060200002900000000002104350000017a020000410000017a0310009c000000000102801900000040011002100000018e011001c7000005e40001042e0000000601000029000000000112004b000003c10000813d000000400100043d00000044021000390000019c03000041000000000032043500000024021000390000001d030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c000000000102801900000040011002100000019d011001c7000005e500010430000300000002001d000000000130004c000003d90000c13d000000400100043d00000064021000390000019a03000041000000000032043500000044021000390000019b030000410000000000320435000000240210003900000024030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e50001043000000004010000290000018d01100198000400000001001d000003f20000c13d000000400100043d000000640210003900000198030000410000000000320435000000440210003900000199030000410000000000320435000000240210003900000022030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e500010430000000070100002900000000001004350000000501000029000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000003240000613d000000000101043b00000004020000290000000000200435000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f00000003030000290000000102200190000003240000613d00000006020000290000000002230049000000000101043b000000000021041b000000400100043d00000000002104350000017a0200004100000000030004140000017a0430009c00000000030280190000017a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000017d011001c70000800d02000039000000030300003900000197040000410000000705000029000000040600002905e305d90000040f00000007030000290000000101200190000002910000c13d000003240000013d0000000601000029000000000110004c00000000010000190000042f0000613d0000000401000029000000000101043300000006040000290000000302400210000000010300008a000000000223022f000000000232013f000000000121016f0000000102400210000000000121019f0000000302000029000000000012041b00000001010000290000000001010433000800000001001d0000017b0110009c0000037e0000213d0000000401000039000600000001001d000000000101041a000000010210019000000001021002700000007f0320018f0000000002036019000400000002001d0000001f0220008c00000000020000190000000102002039000000000121013f0000000101100190000003330000c13d0000000401000029000000200110008c0000046c0000413d000000060100002900000000001004350000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000017d011001c7000080100200003905e305de0000040f0000000102200190000003240000613d00000008030000290000001f023000390000000502200270000000200330008c0000000002004019000000000301043b00000004010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b0000046c0000813d000000000002041b0000000102200039000000000312004b000004680000413d00000008010000290000001f0110008c0000049e0000a13d000000060100002900000000001004350000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000017d011001c7000080100200003905e305de0000040f000000010220019000000005020000290000000106000029000003240000613d000000080300002900000000032301700000002002000039000000000101043b0000048c0000613d0000002002000039000000000400001900000000056200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b000004840000413d0000000804000029000000000343004b0000049a0000813d00000008030000290000000303300210000000f80330018f000000010400008a000000000334022f000000000343013f000000010400002900000000024200190000000002020433000000000232016f000000000021041b000000010100003900000008020000290000000102200210000004ab0000013d0000000801000029000000000110004c0000000001000019000004a40000613d0000000701000029000000000101043300000008040000290000000302400210000000010300008a000000000223022f000000000232013f000000000221016f0000000101400210000000000112019f0000000602000029000000000012041b0000002001000039000001000010044300000120000004430000017e01000041000005e40001042e0000017a030000410000017a0410009c000000000103801900000040011002100000017a0420009c00000000020380190000006002200210000000000112019f00000000020004140000017a0420009c0000000002038019000000c002200210000000000112019f000001a1011001c7000080100200003905e305de0000040f0000000102200190000004c70000613d000000000101043b000000000001042d0000000001000019000005e50001043000000020030000390000000004310436000000000302043300000000003404350000004001100039000000000430004c000004d80000613d000000000400001900000000054100190000002004400039000000000624001900000000060604330000000000650435000000000534004b000004d10000413d000000000231001900000000000204350000001f02300039000000200300008a000000000232016f0000000001210019000000000001042d0004000000000002000400000003001d0000018d01100198000005330000613d0000018d02200198000200000002001d000005480000613d000300000001001d0000000000100435000000200000043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000005310000613d000000000101043b000000000201041a0000000401000029000100000002001d000000000112004b0000055d0000413d00000003010000290000000000100435000000200000043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000005310000613d000000040200002900000001030000290000000002230049000000000101043b000000000021041b000000020100002900000000001004350000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f0000000102200190000005310000613d000000000101043b000000000201041a00000004030000290000000002320019000000000021041b000000400100043d00000000003104350000017a0200004100000000030004140000017a0430009c00000000030280190000017a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000017d011001c70000800d020000390000000303000039000001a2040000410000000305000029000000020600002905e305d90000040f0000000101200190000005310000613d000000000001042d0000000001000019000005e500010430000000400100043d0000006402100039000001a70300004100000000003204350000004402100039000001a8030000410000000000320435000000240210003900000025030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e500010430000000400100043d0000006402100039000001a50300004100000000003204350000004402100039000001a6030000410000000000320435000000240210003900000023030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e500010430000000400100043d0000006402100039000001a30300004100000000003204350000004402100039000001a4030000410000000000320435000000240210003900000026030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e50001043000030000000000020000018d01100198000005af0000613d000200000003001d0000018d02200198000300000002001d000005c40000613d000100000001001d00000000001004350000000101000039000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f00000001022001900000000304000029000005ad0000613d000000000101043b0000000000400435000000200010043f0000017a0100004100000000020004140000017a0320009c0000000001024019000000c0011002100000018f011001c7000080100200003905e305de0000040f00000003060000290000000102200190000005ad0000613d000000000101043b0000000202000029000000000021041b000000400100043d00000000002104350000017a0200004100000000030004140000017a0430009c00000000030280190000017a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000017d011001c70000800d0200003900000003030000390000019704000041000000010500002905e305d90000040f0000000101200190000005ad0000613d000000000001042d0000000001000019000005e500010430000000400100043d00000064021000390000019a03000041000000000032043500000044021000390000019b030000410000000000320435000000240210003900000024030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e500010430000000400100043d000000640210003900000198030000410000000000320435000000440210003900000199030000410000000000320435000000240210003900000022030000390000000000320435000001920200004100000000002104350000000402100039000000200300003900000000003204350000017a020000410000017a0310009c0000000001028019000000400110021000000193011001c7000005e500010430000005dc002104210000000102000039000000000001042d0000000002000019000000000001042d000005e1002104230000000102000039000000000001042d0000000002000019000000000001042d000005e300000432000005e40001042e000005e5000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000200000000000000000000000000000000200000000000000000000000000000040000001000000000000000000000000000000000000000000000000000000000000000000000000003950935000000000000000000000000000000000000000000000000000000000a457c2d600000000000000000000000000000000000000000000000000000000a457c2d700000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000395093510000000000000000000000000000000000000000000000000000000070a082310000000000000000000000000000000000000000000000000000000095d89b410000000000000000000000000000000000000000000000000000000018160ddc0000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd00000000000000000000000000000000000000000000000000000000313ce5670000000000000000000000000000000000000000000000000000000006fdde0300000000000000000000000000000000000000000000000000000000095ea7b3000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000200000000000000000000000000200000000000000000000000000000000000040000000000000000000000000207a65726f00000000000000000000000000000000000000000000000000000045524332303a2064656372656173656420616c6c6f77616e63652062656c6f7708c379a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000840000000000000000000000008a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b4e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000008c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925737300000000000000000000000000000000000000000000000000000000000045524332303a20617070726f766520746f20746865207a65726f206164647265726573730000000000000000000000000000000000000000000000000000000045524332303a20617070726f76652066726f6d20746865207a65726f2061646445524332303a20696e73756666696369656e7420616c6c6f77616e63650000000000000000000000000000000000000000000064000000000000000000000000c2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85bffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff00000000000000800200000000000000000000000000000000000000000000000000000000000000ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef616c616e6365000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220616d6f756e7420657863656564732062657373000000000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220746f20746865207a65726f2061646472647265737300000000000000000000000000000000000000000000000000000045524332303a207472616e736665722066726f6d20746865207a65726f2061640000000000000000000000000000000000000000000000000000000000000000cf579edb74ac72eeb250c046392df018b0bcf4e27dd16bef8fae0e95a54c893d";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

import { configureChains, createClient, } from "wagmi";
// import { zkSync } from "wagmi/chains";
import { zkSyncTestnet,  } from "wagmi/chains";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public'


import { getDefaultWallets } from "@rainbow-me/rainbowkit";

import { RPC, WALLET_CONNECT } from "../variables/index";

export const currentChain = zkSyncTestnet;

export const { chains, provider, webSocketProvider } = configureChains(
  [currentChain],
  [
    publicProvider(),

    jsonRpcProvider({
      rpc: (_) => ({
        http: RPC,
      })
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  projectId: WALLET_CONNECT,
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});


export {ERC20_GOO} from './contracts'
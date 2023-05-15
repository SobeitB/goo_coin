import { Suspense } from "react";
import {
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { wagmiClient,chains } from "shared/config/blockchain";


export const withWagmi = (component: () => React.ReactNode) => () =>(
  <WagmiConfig client={wagmiClient} >
    <RainbowKitProvider chains={chains} >
      <Suspense fallback="Loading...">{component()}</Suspense>
    </RainbowKitProvider>
  </WagmiConfig>
);

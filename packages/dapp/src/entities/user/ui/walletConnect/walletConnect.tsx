import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import {Button} from "shared/ui/Button";
import {setTxEnd} from "shared/lib/txEnd";

export const WalletConnect = () => {
  const { openConnectModal } = useConnectModal();
  const {address} = useAccount();

  const connectWallet = () => {
    setTxEnd(async () => {
      openConnectModal && openConnectModal();
    })
  }

  if(!address) {
    return (
      <Button onClick={connectWallet}>Connect</Button>
    )
  }

  return null;
};

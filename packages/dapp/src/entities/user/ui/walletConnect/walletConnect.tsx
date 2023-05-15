import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import {Button} from "shared/ui/Button";

export const WalletConnect = () => {
  const { openConnectModal } = useConnectModal();
  const {address} = useAccount()

  if(openConnectModal && !address) {
    return (
      <Button onClick={openConnectModal}>Connect</Button>
    )
  }

  return null;
};

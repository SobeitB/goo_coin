import { useConnectModal } from "@rainbow-me/rainbowkit";

import { WalletConnectBtn } from "./walletConnect.styled";

export const WalletConnect = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <>
      {openConnectModal && (
        <WalletConnectBtn onClick={openConnectModal}>Connect</WalletConnectBtn>
      )}
    </>
  );
};




import {memo, useEffect} from "react";
import {useNetwork, useSwitchNetwork, useAccount} from "wagmi";

import {currentChain} from "shared/config/blockchain";
import {CHANGE_NETWORK, NotificationType} from "shared/config/notification";
import {notificationStore} from "shared/lib/notification";


export const SetChainDefault = memo(({children}:{children: React.ReactNode}) => {
    const {chain} = useNetwork()
    const {switchNetworkAsync} = useSwitchNetwork()
    const {address} = useAccount();

    useEffect(() => {
        console.log(chain?.id !== currentChain.id && Boolean(address));
        
        const switchChain = async () => {

            if(chain?.id !== currentChain.id && Boolean(address)) {
                notificationStore.createNotification({
                    text:CHANGE_NETWORK,
                    type:NotificationType.ERROR,
                })
                await switchNetworkAsync?.(currentChain.id)
            }
        }

        switchChain()

    }, [chain, address])

    return <>{children}</>;
});

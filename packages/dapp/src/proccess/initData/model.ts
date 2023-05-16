import { useAccount, useContract, useContractEvent, useProvider} from 'wagmi'
import {useEffect} from "react";

import {ERC20_GOO} from "shared/config/blockchain";
import { AIR_DROP, PRESALE_DROP, apiPool, setClaim, setDeadline, setPools } from 'entities/sale';
import { formatEther } from 'viem';
import { formulaPercent } from './lib';

export const useGetData = () => {
    const provider = useProvider();
    const {address} = useAccount()
    const contract = useContract({
        ...ERC20_GOO,
        signerOrProvider:provider
    });

    useContractEvent({
        ...ERC20_GOO,
        eventName: 'ClaimTokensPool',
        listener(log:any) {
          apiPool.setClaim(formulaPercent(log, AIR_DROP))
        },
    })

    useContractEvent({
        ...ERC20_GOO,
        eventName: 'PresaleTokensPool',
        listener(log:any) {
          apiPool.setPreSale(formulaPercent(log, PRESALE_DROP))
        },
    })

    useEffect(() => {
        const getData = async () => {
            const viewAirdrop = await contract?.viewAirdrop();
            const viewSale = await contract?.viewSale();
            const isClaim = address && await contract?.claimed(address) ;
            
            const data = {
                deadline:+(+viewAirdrop[1] - Date.now() / 1000).toFixed(0),
                pools: {
                    claim:formulaPercent(viewAirdrop[2], AIR_DROP),
                    presale:formulaPercent(viewSale[2], PRESALE_DROP),
                },
                isClaim
            }

            console.log(data)

            setDeadline(data.deadline)
            setPools(data.pools)
            setClaim(data.isClaim)
        }

        if(contract) getData();
    }, [contract, address])

    
}
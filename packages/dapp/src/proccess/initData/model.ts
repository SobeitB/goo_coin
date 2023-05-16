import { useContract} from 'wagmi'
import {useEffect} from "react";

import {ERC20_GOO} from "shared/config/blockchain";

export const useGetData = () => {
    const contract = useContract({
        ...ERC20_GOO,
    });

    useEffect(() => {
        contract
    }, [contract])
}
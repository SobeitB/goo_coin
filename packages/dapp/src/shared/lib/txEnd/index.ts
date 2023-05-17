import { setTx } from "entities/user";

export const setTxEnd = async (callback: () => Promise<any>) => {

    setTx(true)
    await callback();
    setTx(false)
}
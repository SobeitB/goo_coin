import {createApi, createStore, createEvent} from "effector";

interface pools {
    claim:number,
    presale:number,
}

export const defaultValue:pools = {
    claim:0,
    presale:0,
}

export const setPools = createEvent<pools>()
export const $pools = createStore<pools>(defaultValue)
      .on(setPools, (_, newData:pools) => newData)

export const apiPool = createApi($pools, {
    setClaim:(state:pools, newClaim:number) => ({
        ...state,
        claim:state.claim - newClaim
    }),
    setPreSale:(state:pools, newPresale:number) => ({
        ...state,
        presale:state.presale - newPresale
    }),
})
import { createEvent, createStore } from "effector";

export const setTx = createEvent<boolean>();


export const $isTx = createStore<boolean>(false)
    .on(setTx, (_, newState:boolean) => newState)
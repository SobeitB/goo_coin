import {createEvent, createStore} from "effector";

export const setClaim = createEvent<boolean>();

export const $isClaim = createStore(false)
      .on(setClaim, (state, newState) => newState)


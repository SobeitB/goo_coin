import {createEvent, createStore} from "effector";

export const setClaim = createEvent();

export const $isClaim = createStore(false)
      .on(setClaim, (state) => !state)


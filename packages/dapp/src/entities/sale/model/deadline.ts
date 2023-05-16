import {createEvent, createStore} from "effector";

export const setDeadline = createEvent<number>()

export const $deadline = createStore(0)
      .on(setDeadline, (_, newData) => newData)
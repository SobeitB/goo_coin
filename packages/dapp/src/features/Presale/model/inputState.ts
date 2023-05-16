import {createEvent, createStore} from "effector";


export const onInputSend = createEvent<string>()

export const $inputSend = createStore<string>('')
    .on(onInputSend, (_, newValue) => newValue)
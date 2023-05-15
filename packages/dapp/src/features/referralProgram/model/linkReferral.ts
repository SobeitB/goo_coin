import {createEvent, createStore} from "effector";

export const setUrl = createEvent<string>()

export const $linkReferral = createStore<string | null>(null)
    .on(setUrl, (_, newLink: string) => newLink);

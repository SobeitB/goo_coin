import { createEvent, createStore } from "effector";

const changeStateMenu = createEvent();

export const onChangeStateMenu = () => changeStateMenu();

export const $isOpenMenu = createStore<boolean>(false)
    .on(changeStateMenu, (state: boolean) => !state)
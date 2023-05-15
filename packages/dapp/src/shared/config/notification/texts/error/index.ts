import {ObjNotification} from "../../index";
import {CHANGE_NETWORK} from "../info";

export const UNKNOW = 'Something went wrong!';

export const TOO_OLD_ROUND:ObjNotification = {
    error:'TOO_OLD_ROUND',
    text:'Old Round!',
}

export const PAYMENT:ObjNotification = {
    error:'PAYMENT',
    text:'Not enough BNB tokens!',
}

export const PAYMENT_GAS:ObjNotification = {
    error:'insufficient funds',
    text:'Not enough BNB tokens!',
}

export const TOO_MUCH_BETS:ObjNotification = {
    error:'TOO_MUCH_BETS',
    text:'You already bet on this game!',
}

export const ACTIVE_GAME_CLAIM:ObjNotification = {
    error:'ACTIVE',
    text:'The game is still active!',
}

export const NETWORK:ObjNotification = {
    error:'underlying network changed',
    text:CHANGE_NETWORK,
}

export const ALL_ERRORS = [TOO_OLD_ROUND, PAYMENT, TOO_MUCH_BETS, PAYMENT_GAS, ACTIVE_GAME_CLAIM, NETWORK];
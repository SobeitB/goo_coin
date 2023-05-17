import {ObjNotification} from "../../index";

export const UNKNOW = 'Something went wrong!';
export const NOT_COPY = 'The wallet addressee was not typed correctly!';
export const NOT_ADDRESS = 'The string does not match the format of the addressee!';
export const YOUR_ADDRESS = 'You can\'t put your addressee in the referral link!';
export const DEADLINE = 'Presale time is not over!';
export const TIME = "Time's up!";
export const CLAIM_TRUE = "You've already taken the award!";
export const ACCOUNT = "connect in your wallet!";
export const MIN_ETH = "Too small a number!";
export const MAX_ETH = "Too many tokens!";
export const BALANCE = "You don't have enough money!";

export const BLOCKED:ObjNotification = {
    error:'BLOCKED',
    text:'You are on the black list!',
}

export const NOTOKENS:ObjNotification = {
    error:'NOTOKENS',
    text:"We're out of tokens!",
}

export const CLAIMONCE:ObjNotification = {
    error:'CLAIMONCE',
    text:CLAIM_TRUE,
}

export const MAXLIMIT:ObjNotification = {
    error:'UPPERBOUND',
    text:MAX_ETH,
}

export const MINPRICE:ObjNotification = {
    error:'MINPRICE',
    text:MIN_ETH,
}





export const ALL_ERRORS:ObjNotification[] = [BLOCKED,NOTOKENS,CLAIMONCE,MAXLIMIT,MINPRICE];
export enum ButtonType {
    DEFAULT = 'default ',
    GRADIENT_HOVER = 'gradient_hover ',
    TAB = 'tab ',
}

export interface typeBtnI {
    background:string,
    backgroundHover:string,
    backgroundClick:string,
}

export const typeBtnStyle:Record<ButtonType, typeBtnI> = {
    [ButtonType.DEFAULT]:{
        background:'var(--bg-color-blue)',
        backgroundHover:'none',
        backgroundClick:'var(--bg-color-blue)',
    },
    [ButtonType.GRADIENT_HOVER]:{
        background:'var(--bg-color-blue)',
        backgroundHover:'linear-gradient(180deg, rgba(1, 0, 29, 0.68) -4.21%, rgba(115, 116, 208, 0.68) 52.27%, rgba(25, 25, 52, 0.68) 110.16%)',
        backgroundClick:'var(--bg-color-blue)',
    },
    [ButtonType.TAB]:{
        background:'rgba(255, 255, 255, 0.28)',
        backgroundHover:'rgba(255, 255, 255, 0.15)',
        backgroundClick:'rgba(255, 255, 255, 0.28)',
    },
}
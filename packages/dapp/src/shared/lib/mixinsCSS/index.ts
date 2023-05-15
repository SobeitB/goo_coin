import {css} from "styled-components";

export const sizeMixin = (
    min:number,
    max:number,
    wrapper:number,
    style = 'font-size',
) => {
    const addSize = max-min;
    return (css`
        ${style}: calc(${min}px + ${addSize} * (100vw / ${wrapper}));
    
        @media (max-width: 767px) {
          ${style}: calc(${min}px + (${addSize} + ${addSize} * 0.7) * (100vw / ${wrapper}));
        }
    `)
};
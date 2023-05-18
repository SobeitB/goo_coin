

import styled from 'styled-components'
import footer from './img/footer.png'
import {sizeMixin} from "shared/lib/mixinsCSS";

export const Wrapper = styled.footer`
    width: 100%;
    position:relative;
  
  ${sizeMixin(100, 200, 1440,"margin-top")}
`

export const BgFooter = styled.img`
    width: 100%;
    position: relative;
    top: -(calc(19px + 88 * (100vw / 1440)));
    @media (max-width: 767px) {
        top: -(calc(19px + (88 + 8 * 0.7) * (100vw / 1440)));
    }
`

export const FooterContent = styled.div`
    width: 100%;

    background-image: url(${footer});
    background-position: 50% 50%;
    background-size: 100% 100%;

    height: calc(19px + 88 * (100vw / 1440));
    @media (max-width: 767px) {
        height: calc(19px + (88 + 8 * 0.7) * (100vw / 1440));
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Text = styled.h3`
  ${sizeMixin(5, 20, 1440,)}
    text-align: center;
`

export const FlyImg = styled.img`
    position:absolute;
    z-index: 50;
    bottom: 22%;
    right: 19%;
    width: 22%;
`



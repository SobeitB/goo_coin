

import styled from 'styled-components'
import footer from './img/footer.png'

export const Wrapper = styled.footer`
    width: 100%;

    margin-top:200px;
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
    font-size: var(--font-size-x-small);
    text-align: center;
`



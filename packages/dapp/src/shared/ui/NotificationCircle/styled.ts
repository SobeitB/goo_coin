import { css, styled } from "styled-components";

export const NotificationCircleBody = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    background: #272658;
    border: 3px solid var(--font-color-white);

    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-x-small);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const CcssBosyCircle = css`
    position: absolute;
    top:0;
    right: 0;
    transform: translate(37%, -37%);
`
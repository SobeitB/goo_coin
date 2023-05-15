import { sizeMixin } from "shared/lib/mixinsCSS"
import { styled } from "styled-components"

export const BodyProgress = styled.div`
    width: 100%;
    margin:0 auto;
`

export const HeaderProgress = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
`


export const TextProgress = styled.p`
    ${sizeMixin(15, 25, 1440)};
    color: var(--font-color-white-hard);

    @media (max-width: 450px) {
        font-size: 15px;
    }
`

export const ProgressWrapper = styled.div`
    width: 100%;
    height: 27px;

    background: rgba(1, 0, 29, 0.28);
    border: 4px solid var(--font-color-white);
    border-radius: 30px;

    @media (max-width: 768px) {
        height: 20px;
    }

    @media (max-width: 520px) {
        height: 15px;
        border-width: 2px
    }

    @media (max-width: 450px) {
        height: 9px;
        border-width: 1px
    }
`

export const ProgressContent = styled.div`
    background: rgba(0, 163, 255, 0.98);
    border-radius: 12px;
    height: 100%;
`
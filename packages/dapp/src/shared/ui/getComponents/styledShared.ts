import { sizeMixin } from "shared/lib/mixinsCSS";
import { styled } from "styled-components";


export const DescriptionGet = styled.h2`

    ${sizeMixin(20 ,40, 1440)}
    ${sizeMixin(20 ,44, 1440, "margin-top")}

    @media(max-width: 520px) {
        margin-top:35px;
        font-size:25px;
    }

    @media(max-width: 420px) {
        margin-top:30px;
        font-size:20px;
    }
`

export const DescriptionTime = styled.h4`
    font-size: var(--font-size-x-small);
    text-align: center;
    color: rgba(255, 255, 255, 0.65);
    margin-bottom: 10px;
`

export const WrapperBtn = styled.div`
    width: 270px;
    height: 81px;
    ${sizeMixin(29, 53, 1440, "margin-top")};

    @media (max-width: 730px) {
        width: 250px;
        ${sizeMixin(20, 40, 1440, "margin-top")}
    }

    @media (max-width: 500px) {
        width: 230px;
        height: 76px;
    }
`
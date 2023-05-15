
import styled from 'styled-components';
import BgMain from './img/BgMain.png';
import bgMainMobile from './img/bgMainMobile.png';
import { sizeMixin } from 'shared/lib/mixinsCSS';


export const BodyMain = styled.div`
    width:100%;
    position: relative;
    background-image: url(${BgMain});
    background-position: 50% 50%;
    background-size: 100% 100%; 

    ${sizeMixin(56, 96, 1067, "padding-top")}

    @media (max-width: 700px) {
        background-image: url(${bgMainMobile});
    }
`

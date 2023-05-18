
import { styled } from "styled-components";
import imgLi from "shared/assets/img/imgLi.svg";
import { Title } from "shared/ui/Title";
import { sizeMixin } from "shared/lib/mixinsCSS";
import bgInfo from "./img/bgInfo.png"


export const BgInfo = styled.div`
    position:absolute;
    z-index:1;
    width:100%;
    height:100%;
    background: url(${bgInfo});
    background-repeat: repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
`

export const TitleInfo = styled(Title)`
    text-align: center;
    ${sizeMixin(100, 200, 1067, "margin-top")}
`

export const InformationBodyText = styled.div`
    ${sizeMixin(20, 33, 1067)}
    ${sizeMixin(37, 75, 1067, "margin-top")}

    @media (max-width:1200px) {
        padding: 0 20px;
    }
`

export const InformationText = styled.p`
    &:not(:first-child) {
        margin-top: 33px;
    }

    @media (max-width:1200px) {
        text-align: center;
    }
`

export const NotesList = styled.ul`
    ${sizeMixin(49, 75, 1067, "margin-top")}
    list-style-image: url(${imgLi}) !important;
    @media (max-width:1200px) {
        padding-left:50px;
        padding-right:20px;
    }
    @media (max-width:320px) {
        padding-left:70px;
    }
`

export const NotesItem = styled.li`
    ${sizeMixin(20, 33, 1067)}
    padding-left: 9px;

    &:not(:first-child) {
        ${sizeMixin(20, 40, 1067, "margin-top")}
    }
`






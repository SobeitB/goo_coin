
import {InformationBodyText, InformationText, NotesItem, NotesList, TitleInfo } from "./infromation.styled"
import { BodyCenter } from "shared/ui/Container"

import { info, notes } from "../config"
import { informationAnchor } from "shared/config/router"



export const Information = () => {
    return(
        <BodyCenter id={informationAnchor}>
            <TitleInfo>Important information </TitleInfo>

            <InformationBodyText>
                {info.map((text:string) => (
                    <InformationText key={text}>{text}</InformationText>
                ))}
            </InformationBodyText>


            <TitleInfo>Notes</TitleInfo>

            <NotesList>
                {notes.map((note:string) => (
                    <NotesItem key={note}>{note}</NotesItem>
                ))}
            </NotesList>
        </BodyCenter>
    )
}
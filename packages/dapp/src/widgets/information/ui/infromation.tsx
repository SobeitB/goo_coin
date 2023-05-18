
import {InformationBodyText, InformationText, NotesItem, NotesList, TitleInfo, BgInfo } from "./infromation.styled"
import { BodyCenter, BodyContent } from "shared/ui/Container"

import { info, notes } from "../config"
import { informationAnchor } from "shared/config/router"
import { aosFadeUp } from "shared/config/aos"



export const Information = () => {
    return(
        <BodyCenter id={informationAnchor}>
            <BgInfo />

            <BodyContent>
                <TitleInfo data-aos={aosFadeUp}>Important information </TitleInfo>

                <InformationBodyText data-aos={aosFadeUp}>
                    {info.map((text:string) => (
                        <InformationText key={text}>{text}</InformationText>
                    ))}
                </InformationBodyText>


                <TitleInfo data-aos={aosFadeUp}>Notes</TitleInfo>

                <NotesList data-aos={aosFadeUp}>
                    {notes.map((note:string) => (
                        <NotesItem key={note}>{note}</NotesItem>
                    ))}
                </NotesList>
            </BodyContent>
        </BodyCenter>
    )
}
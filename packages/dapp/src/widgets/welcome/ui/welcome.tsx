

import { Main, ImgBg } from "./welcome.styled"
import bgWelcome from "./img/bgWelcome.png"

import { Header } from "./header"

export const Welcome = () => {
    return(
        <Main>
            <Header/>
            <ImgBg src={bgWelcome} />
        </Main>
    )
}
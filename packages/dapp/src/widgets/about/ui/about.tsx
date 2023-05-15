
import { BodyInfo, Description, Paragraph } from "./about.styled"
import { Title } from "shared/ui/Title"

import { aboutAnchor } from "shared/config/router"


export const About = () => {
    return(
        <BodyInfo id={aboutAnchor}>
            <Title> About</Title>
            <Description>
                <Paragraph>
                    The goose has been used too long on the cotton 
                    plantations 
                    Now he wants to have some fun!
                </Paragraph>

                <Paragraph>
                    Goose smokes and you don't smoke. It's bad for 
                    you. Although of course it's up to you but I 
                    wouldn't advise it.
                </Paragraph>

                <Paragraph>
                    zkGoose is a meme token based on the L2 zkSync. 
                    We want the community to manage the token itself
                </Paragraph>
                
            </Description>
        </BodyInfo>
    )
}
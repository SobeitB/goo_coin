
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";

import { BgFooter, FooterContent, Wrapper, Text, FlyImg } from "./footer.styled"
import footerImgBg from "./img/footerImgBg.png"
import fly from "./img/fly.png"


export const Footer = () => {
    return(
        <Wrapper>
            <MouseParallaxContainer 
                enabled 
                resetOnLeave
            >
                <BgFooter src={footerImgBg} />
                <MouseParallaxChild
                    factorX={0.2}
                    factorY={0.3}
                >
                    <FlyImg src={fly} />
                 </MouseParallaxChild>

                <FooterContent>
                    <Text>
                    From the community. For the community. <br />
                    zkGoose - all rights reserved
                    </Text>
                </FooterContent>
            </MouseParallaxContainer>        
        </Wrapper>
    )
}
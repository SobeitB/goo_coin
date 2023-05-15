import { BgFooter, FooterContent, Wrapper, Text } from "./footer.styled"
import footerImgBg from "./img/footerImgBg.png"


export const Footer = () => {
    return(
        <Wrapper>
            <BgFooter src={footerImgBg} />

            <FooterContent>
                <Text>
                From the community. For the community. <br />
                zkGoose - all rights reserved
                </Text>
            </FooterContent>
        </Wrapper>
    )
}
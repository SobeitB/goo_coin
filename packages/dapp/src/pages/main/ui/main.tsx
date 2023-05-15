
import { BodyMain, } from "./welcome.styled"
import { MainContainer } from "shared/ui/Container"
import { About } from "widgets/about"

import { Welcome } from "widgets/welcome"
import { SalePlatforms } from "widgets/salePlatforms"
import { ReferralProgram } from "features/referralProgram"
import { Information } from "widgets/information"
import { Collabarations } from "widgets/Collabarations"
import { Goseemap } from "widgets/goseemap"
import { Footer } from "widgets/footer"
import { Economics } from "widgets/economics"
import { Contacts } from "widgets/contact"
import { GetTokens } from "widgets/getTokens"


export const MainPage = () => {

    return(
        <>
            <Welcome />
            
            <BodyMain>

                <MainContainer >

                    <About />
                    <SalePlatforms />
                    <ReferralProgram />
                    <Information/>
                    <GetTokens />
                    <Goseemap />
                    <Economics />
                    <Contacts />
                    <Collabarations />
                </MainContainer>

                <Footer />
            </BodyMain>
        </>
    )
}
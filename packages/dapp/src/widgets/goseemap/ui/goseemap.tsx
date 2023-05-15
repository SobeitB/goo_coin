
import { Description, GoSeeMapBody, GoSeeMapWrapper, Item, ListItems, NextImg, PhaseBody, PhaseTitle } from "./goseemap.styled"
import { Title } from "shared/ui/Title"


import { phases } from "../config"
import { roadmapAnchor } from "shared/config/router"

import next from './img/next.svg'


export const Goseemap  = () => {

    return(
        <GoSeeMapBody id={roadmapAnchor}>
            <Title>Goseemap</Title>

            <GoSeeMapWrapper>
                {phases.map((phase:string[], index:number) => (
                    <PhaseBody key={phase[0]}>
                        <PhaseTitle>Phase {index+1}</PhaseTitle>

                        <ListItems>
                            {phase.map((item:string) => (
                                <Item key={item}>{item}</Item>
                            ))}
                        </ListItems>

                        {window.innerWidth > 1030 ?
                            <>
                                <NextImg 
                                    index={index+1}
                                    src={next}
                                />

                                {index === 1 &&
                                    <NextImg 
                                        index={index+1}
                                        src={next}
                                        bottom
                                    />
                                }
                            </>
                            :
                            <>
                                <NextImg 
                                    index={index+1}
                                    src={next}
                                />

                                {index === 0 &&
                                    <NextImg 
                                        index={index+1}
                                        src={next}
                                        bottom
                                    />
                                }
                            </>
                        }
                    </PhaseBody>
                ))}
            </GoSeeMapWrapper>

            <Description>Further plans as the brand develops will be posted in social media</Description>
        </GoSeeMapBody>
    )
}
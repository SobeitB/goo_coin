import { BodyProgress, HeaderProgress, ProgressContent, ProgressWrapper, TextProgress } from "./styled"

interface ProgressProps {
    percentClaimed: number;
}

export const Progress = ({percentClaimed}:ProgressProps) => {
    return(
        <BodyProgress>
            <HeaderProgress>
                <TextProgress>Total claimed</TextProgress>
                <TextProgress>zkGoose</TextProgress>
            </HeaderProgress>

            <ProgressWrapper>
                <ProgressContent style={{"width": `${percentClaimed}%`}} />
            </ProgressWrapper>
        </BodyProgress>
    )
}
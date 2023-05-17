
import Countdown from "react-countdown";
import { useStore } from "effector-react";
import { memo } from "react";

import {TimerBody, TimerTitle, TimerWrapper} from "./styled"
import {timerTemplate} from "./timer.tsx";
import { $deadline } from "../../model";

export const Timer = memo(() => {
    const timer = useStore($deadline);

    return(
        <TimerBody>
              <TimerTitle>Time left</TimerTitle>

              <TimerWrapper>
                    <Countdown date={Date.now() + timer * 1000} renderer={timerTemplate} />
              </TimerWrapper>
        </TimerBody>
    )
})
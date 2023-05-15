import {TimerText, TimerTextBody, TimerTextTitle, TimerTextWrapper} from "./styled.ts";


interface timerTemplateProps {
      days:number,
      hours:number,
      minutes:number,
      seconds:number,
}

const fromatDate = (date:number) => date < 10 ? `0${date}` : date;

export const timerTemplate = ({ days, hours, minutes, seconds }:timerTemplateProps) => {
      return(
            <TimerTextWrapper>
                  <TimerTextBody>
                        <TimerText>{fromatDate(days)}</TimerText>
                        <TimerTextTitle>Days</TimerTextTitle>
                  </TimerTextBody>

                  <TimerTextBody>
                        <TimerText>{fromatDate(hours)}</TimerText>
                        <TimerTextTitle>Hours</TimerTextTitle>
                  </TimerTextBody>

                  <TimerTextBody>
                        <TimerText>{fromatDate(minutes)}</TimerText>
                        <TimerTextTitle>Minutes</TimerTextTitle>
                  </TimerTextBody>

                  <TimerTextBody>
                        <TimerText>{fromatDate(seconds)}</TimerText>
                        <TimerTextTitle>Seconds</TimerTextTitle>
                  </TimerTextBody>
            </TimerTextWrapper>
      )
}
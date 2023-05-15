
import { ImgIcon } from './backgroundMusic.styled'

import play from './img/play.svg'
import stop from './img/stop.svg'

import { useMusic } from '../model'

export const BackgroundMusic = () => {
    const {
        isPlay,
        setPlay,
    } = useMusic()

    return(
        <>
            <ImgIcon 
                src={isPlay ? stop : play}  
                onClick={setPlay}
            />
        </>
    )
}
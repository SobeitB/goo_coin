import { useEffect } from "react";
import useSound from 'use-sound';

import { useToogle } from "shared/lib/toogle";
import soudBg from 'shared/assets/music/bgMusic.mp3'


export const useMusic = () => {
    const [play, {pause}] = useSound(soudBg);

    const [isPlay, setPlay] = useToogle();

    useEffect( () => {
        
        if(isPlay) {
            play()
        } else {
            pause()
        }

        const interval = setInterval(() => {
            if(isPlay && play) {
                play()
            }
        }, 103 * 1000)
      
        return () => clearInterval(interval)
    }, [isPlay, play, pause])

    return{
        isPlay,
        setPlay,
    }
}
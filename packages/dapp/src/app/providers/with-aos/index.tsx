import {useEffect} from "react";
import AOS from 'aos';

export const withAos = (component: () => React.ReactNode) => (() => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, []);

    return component() ;
})
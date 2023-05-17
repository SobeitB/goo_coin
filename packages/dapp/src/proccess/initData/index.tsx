import { ReactNode} from "react";
import {useGetData} from './model'

interface InitDataProps {
      children: ReactNode,
}

export const InitData = ( {children}:InitDataProps ) => {
      useGetData()

      return(<>{children}</>)
}
import {memo, ReactNode, useEffect} from "react";
import {useGetData} from './model'

interface InitDataProps {
      children: ReactNode,
}

export const InitData = ( {children}:InitData ) => {
      useGetData()

      return(<>{children}</>)
}
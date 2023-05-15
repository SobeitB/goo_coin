
import { withProviders } from "./providers"

import { MainPage } from "pages/main"

import './styles/index.css'
import '@rainbow-me/rainbowkit/styles.css';
import {SetChainDefault} from "proccess/setChainDefault";
import {InitData} from "../proccess/initData";

function App() {
  

  return (
      <SetChainDefault>
            <InitData>
                  <MainPage />
            </InitData>
      </SetChainDefault>
  )
}

export default withProviders(App)


import { withProviders } from "./providers"

import { MainPage } from "pages/main"

import './styles/index.css'
import '@rainbow-me/rainbowkit/styles.css';
import {SetChainDefault} from "proccess/setChainDefault";

function App() {
  

  return (
      <SetChainDefault>
        <MainPage />
      </SetChainDefault>
  )
}

export default withProviders(App)

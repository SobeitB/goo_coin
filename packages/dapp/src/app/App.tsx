
import { withProviders } from "./providers"

import { MainPage } from "pages/main"

import './styles/index.css'
import '@rainbow-me/rainbowkit/styles.css';

function App() {
  

  return (
    <MainPage />
  )
}

export default withProviders(App)

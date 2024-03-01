import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AccountProvider } from "./contexts/AccountContext"
import { Router } from "./Router"
import { HashRouter } from "react-router-dom"
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <AccountProvider>
          <Router />
        </AccountProvider>
      </HashRouter>

    </ThemeProvider >
  )
}

export default App

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { AccountProvider } from "./contexts/AccountContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AccountProvider>
        <Home />
      </AccountProvider>

    </ThemeProvider>
  )
}

export default App

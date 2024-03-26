import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import { ThemeProvider } from "styled-components"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./style"
import themaDark from "./themes/dark"
import themaLight from "./themes/light"
import { useState } from "react"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)
  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? themaDark : themaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

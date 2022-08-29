import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Proposta from "./components/Proposta/Proposta"
import GlobalStyle from "./globalstyles/GlobalStyles"

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path=":codproposta/:codcliente"
            element={
              <>
                <Proposta />
              </>
            } />
        </Routes>
        <GlobalStyle />
      </>
    </BrowserRouter>
  )
}

export default App

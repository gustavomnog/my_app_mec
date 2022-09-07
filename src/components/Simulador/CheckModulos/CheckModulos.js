import { useState } from "react"
import { Container } from "./styles"


const CheckModulos = ({ listaAtual, handleCheckModulo }) => {
  const [lista, setLista] = useState(listaAtual)


  return (
    <>
      {
        lista.map(modulo => {
          return (
            <Container key={modulo.ID}>
              <label className="container">
                <div className="input-wrapper">
                  <input type="checkbox" id={modulo.ID} defaultChecked={modulo.MARC} onChange={handleCheckModulo} />
                  <span className="checkmark"></span>
                </div>
                <span className="text">{modulo.DESCRICAO}</span>
              </label>
            </Container>
          )
        })
      }
    </>
  )
}

export default CheckModulos
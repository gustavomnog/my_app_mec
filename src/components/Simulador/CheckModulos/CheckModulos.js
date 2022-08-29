import { Container } from "./styles"


const CheckModulos = ({ nomeModulo, selecionado }) => {


  return (
    <Container>
      <label className="container">
        <div className="input-wrapper">
          <input type="checkbox" defaultChecked={selecionado} />
          <span className="checkmark"></span>
        </div>
        <span className="text">{nomeModulo}</span>
      </label>
    </Container>
  )
}

export default CheckModulos
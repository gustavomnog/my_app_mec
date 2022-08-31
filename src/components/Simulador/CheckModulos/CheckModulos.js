import { Container } from "./styles"


const CheckModulos = ({ nomeModulo, selecionado, handleCheckModulo, id }) => {


  return (
    <Container>
      <label className="container">
        <div className="input-wrapper">
          <input type="checkbox" id={id} defaultChecked={selecionado} onChange={handleCheckModulo}/>
          <span className="checkmark"></span>
        </div>
        <span className="text">{nomeModulo}</span>
      </label>
    </Container>
  )
}

export default CheckModulos
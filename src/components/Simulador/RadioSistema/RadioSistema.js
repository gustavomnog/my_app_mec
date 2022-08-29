import Container from "./styles"


const RadioSistema = ({ sistema, handleCheckSystem }) => {
  return (
    <Container>
      <label className={sistema === "MECAUTO" ? "containerMecauto" : "containerBox"}>
        <div className="input-wrapper">
          <input type="radio" name="radio" onClick={handleCheckSystem} />
          <span className="checkmark"></span>
        </div>
        <span className="text">{sistema}</span>
      </label>
    </Container>
  )
}



export default RadioSistema
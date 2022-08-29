import { Titulo, Input, Obs } from "./styles"


const QtdAcessos = ({handleChangeAccess}) => {
  return (
    <>
      <Titulo>DEFINA A QUANTIDADE DE ACESSOS SIMULTÂNEOS:</Titulo>
      <Input>
        <input type="number" min={5} defaultValue={5} onChange={handleChangeAccess}/>
      </Input>
      <Obs>
        * Um acesso está incluído no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.
      </Obs>
    </>
  )
}

export default QtdAcessos
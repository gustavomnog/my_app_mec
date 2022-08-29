import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

import { Container } from "./styles"


const Button = ({ handleOpenSimulator, exibir }) => {


  return (
    <Container>
      <button onClick={handleOpenSimulator}>Faça uma simulação
        {exibir ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
      </button>
    </Container>
  )
}

export default Button
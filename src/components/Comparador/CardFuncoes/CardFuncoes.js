import { useState } from "react"
import { IoBan, IoCheckmarkCircleOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import Ajuda from "./Ajuda/Ajuda"

import { Container, Titulo, Tabela, BodyTabela, LinhaTabela, CelulaTabela, ButtonExibir } from "./styles"


const CardFuncoes = ({ grupo, name }) => {
  const [exibirFuncoes, setExibirFuncoes] = useState(false)


  const handleShowFunction = () => {
    setExibirFuncoes(!exibirFuncoes)
  }


  return (
    <Container>
      <Titulo>{name}</Titulo>
      {exibirFuncoes && (
        <Tabela>
          <BodyTabela>
            {
              grupo.map(funcao => {
                return (
                  <>
                    <LinhaTabela>
                      <CelulaTabela className="funcao">
                        {funcao.CM_DESC_FUNC}
                        <Ajuda ajuda={funcao.CM_AJUDA} />
                      </CelulaTabela>
                      <CelulaTabela className="mecauto">
                        {funcao.CM_SIST_MEC === "S" ? <IoCheckmarkCircleOutline className="icon" /> : <span>{funcao.CM_COND}</span>}
                      </CelulaTabela>
                      <CelulaTabela className="box">
                        {funcao.CM_SIST_MECBOX === "S"
                          ? <IoCheckmarkCircleOutline className="icon" />
                          : funcao.CM_COND != null ? <span>{funcao.CM_COND}</span> : <IoBan className="icon iconBan" />}
                      </CelulaTabela>
                    </LinhaTabela>
                  </>
                )
              })
            }
          </BodyTabela>
        </Tabela>
      )}
      <ButtonExibir>
        <button onClick={handleShowFunction}>{exibirFuncoes ? "Ocultar funções" : "Ver funçoes"}
          {exibirFuncoes ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
        </button>
      </ButtonExibir>


    </Container>
  )
}


export default CardFuncoes
import { IoBan, IoCheckmarkCircleOutline } from "react-icons/io5"

import { Container, Titulo, Tabela, BodyTabela, LinhaTabela, CelulaTabela } from "./styles"


const CardFuncoes = ({ grupo, name }) => {


  return (
    <Container>
      <Titulo>{name}</Titulo>
      <Tabela>
        <BodyTabela>
          {
            grupo.map(funcao => {
              return (
                <>
                  <LinhaTabela>
                    <CelulaTabela className="funcao">{funcao.CM_DESC_FUNC}</CelulaTabela>
                    <CelulaTabela className="mecauto">
                      {funcao.CM_SIST_MEC === "S" ? <IoCheckmarkCircleOutline className="icon" /> : <IoBan className="icon iconBan"/>}
                    </CelulaTabela>
                    <CelulaTabela className="box">
                    {funcao.CM_SIST_MECBOX === "S" ? <IoCheckmarkCircleOutline className="icon" /> : <IoBan className="icon iconBan"/>}
                    </CelulaTabela>
                  </LinhaTabela>
                </>
              )
            })
          }
        </BodyTabela>
      </Tabela>


    </Container>
  )
}


export default CardFuncoes
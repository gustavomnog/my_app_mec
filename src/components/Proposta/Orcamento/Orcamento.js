import CheckModulos from "../CheckModulos/CheckModulos"
import CardMecauto from "../CardMecauto/CardMecauto"

import { Container, ContainerCards, ContainerModulos, Modulos, Titulo, TituloModulos, Obs } from "./styles"
import CardBox from "../CardBox/CardBox"

const Orcamento = ({ lista,valoresMecauto, valoresBox }) => {


  return (
    <Container>
      <Titulo>Seu orçamento</Titulo>
      <ContainerModulos>
        <TituloModulos>
          <span>Esses são os módulos disponíveis. Os que estão marcados, são os que você solicitou:</span>
        </TituloModulos>
        <Modulos>
          {
            lista.map(modulo => {
              
              return (
                <CheckModulos
                  key={modulo.ID}
                  nomeModulo={modulo.DESCRICAO}
                  selecionado={modulo.MARC}
                />)
            })
          }
        </Modulos>
      </ContainerModulos>
      <ContainerCards>
        <CardMecauto />
        <CardBox />
      </ContainerCards>
      <Obs>
        <span>* Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</span>
        <span>* Os descontos citados acima, são em comparação ao plano MENSAL.</span>
      </Obs>
    </Container>

  )
}


export default Orcamento
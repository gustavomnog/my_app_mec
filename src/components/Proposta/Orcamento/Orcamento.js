import CheckModulos from "../CheckModulos/CheckModulos"
import CardMecauto from "../CardMecauto/CardMecauto"

import { Container, ContainerCards, ContainerModulos, Modulos, Titulo, TituloModulos, Obs } from "./styles"
import CardBox from "../CardBox/CardBox"

const Orcamento = ({ lista, valoresMecauto, valoresBox }) => {
  const valorSistemaMec = valoresMecauto
  const valorSistemaBox = valoresBox
  const valoresModulos = {
    ANU: 0,
    ANU2: 0,
    ANU3: 0,
    ANU4: 0,
    SEM: 0,
    SEM2: 0,
    TRI: 0,
    MEN: 0,
  }

  const marcados = lista.filter(modulo => modulo.MARC === true)

  marcados.forEach(modulo => {
    for (const i in valoresModulos) {
      valoresModulos[i] = valoresModulos[i] + modulo[i]
    }
  })


  for (const i in valorSistemaMec) {
    valorSistemaMec[i] = (valorSistemaMec[i] + valoresModulos[i])
  }
  for (const i in valorSistemaBox) {
    valorSistemaBox[i] = valorSistemaBox[i] + valoresModulos[i]
  }

  console.log(valorSistemaMec);

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
        <CardMecauto valorSistemaMec={valorSistemaMec} />
        <CardBox valorSistemaBox={valorSistemaBox} />
      </ContainerCards>
      <Obs>
        <span>* Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</span>
        <span>* Os descontos citados acima, são em comparação ao plano MENSAL.</span>
      </Obs>
    </Container>

  )
}


export default Orcamento
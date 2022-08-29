import Button from "./Button/Button"
import RadioSistema from "./RadioSistema/RadioSistema"
import QtdAcessos from "./QtdAcessos/QtdAcessos"
import CheckModulos from "./CheckModulos/CheckModulos"
import CardSistema from "./CardSistema/CardSistema"


import { Container, Titulo, ContainerSistema, TituloSistema, ContainerRadio, ContainerAcessos, ContainerModulos, TituloModulos, Modulos, ContainerCard, Obs } from "./styles"
import { useState } from "react"


const Simulador = ({ lista }) => {
  const [exibir, setExibir] = useState(false)
  const [sistema, setSistema] = useState(false)

  const handleOpenSimulator = () => {
    setExibir(!exibir)
  }


const handleCheckSystem = e => {
  setSistema(e)
}

const handleChangeAccess= () => {
  console.log("mudou")
}









  if (!exibir) {
    return (
      <Button handleOpenSimulator={handleOpenSimulator} exibir={exibir} />
    )
  } else {

    return (
      <>
        <Button handleOpenSimulator={handleOpenSimulator} exibir={exibir} />
        <Container>
          <Titulo>Simule um novo orçamento:</Titulo>
          <ContainerSistema>
            <TituloSistema>ESCOLHA O SISTEMA:</TituloSistema>
            <ContainerRadio>
              <RadioSistema sistema="MECAUTO" handleCheck={() => handleCheckSystem("mecauto")} />
              <RadioSistema sistema="MECAUTO-BOX" handleCheck={() => handleCheckSystem("mecautoBox")}/>
            </ContainerRadio>
          </ContainerSistema>
          <ContainerAcessos>
            <QtdAcessos handleChangeAccess={handleChangeAccess}/>
          </ContainerAcessos>
          <ContainerModulos>
            <TituloModulos>
              <span>ESCOLHA OS MÓDULOS:</span>
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
          <ContainerCard>
            <CardSistema />
          </ContainerCard>
          <Obs>* Os descontos citados acima, são em comparação ao plano MENSAL.</Obs>
        </Container>
      </>
    )
  }
}

export default Simulador
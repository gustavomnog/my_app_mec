import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

import Button from "./Button/Button"
import RadioSistema from "./RadioSistema/RadioSistema"
import QtdAcessos from "./QtdAcessos/QtdAcessos"
import CheckModulos from "./CheckModulos/CheckModulos"
import CardSistema from "./CardSistema/CardSistema"
import valorTotal from "../Acessos/Acessos"


import { Container, Titulo, ContainerSistema, TituloSistema, ContainerRadio, ContainerAcessos, ContainerModulos, TituloModulos, Modulos, ContainerCard, Obs } from "./styles"
import 'react-toastify/dist/ReactToastify.min.css';


const Simulador = ({ lista, valoresMec, valoresBox, descontoFilial, acessosProposta }) => {
  const [exibir, setExibir] = useState(false)
  const [sistema, setSistema] = useState("mecauto")
  const [acessos, setAcessos] = useState(acessosProposta)
  const [listaAtual, setListaAtual] = useState(lista)
  const [totalMecauto, setTotalMecauto] = useState()
  const [totalBox, setTotalBox] = useState()
  

  const handleOpenSimulator = () => {
    setExibir(!exibir)
  }

  const handleCheckSystem = sistema => {
    setSistema(sistema)
  }

  const handleChangeAccess = input => {
    setAcessos((input.target.value) - 5)
  }

  const handleCheckModulo = moduloAlterado => {
    const oficina = listaAtual.filter(modulo => modulo.ID === 6)
    const venda = listaAtual.filter(modulo => modulo.ID === 5)



    if (!oficina[0].MARC && moduloAlterado.target.id === "5" && moduloAlterado.target.checked === false) {
      moduloAlterado.target.checked = true
      toast.warn('É obrigatório escolher o módulo OFICINA e/ou VENDA.', {
        position: "top-center",
        toastId: "customId",
      })

    } else if (!venda[0].MARC && moduloAlterado.target.id === "6" && moduloAlterado.target.checked === false) {
      moduloAlterado.target.checked = true
      toast.warn('É obrigatório escolher o módulo OFICINA e/ou VENDA.', {
        position: "top-center",
        toastId: "customId",
      })
    }

    else {

      const listaAlterada = listaAtual.map(modulo => {
        if (modulo.ID === Number(moduloAlterado.target.id)) {
          modulo.MARC = moduloAlterado.target.checked
        }
        return modulo
      })
      setListaAtual(listaAlterada)

    }
  }

  const Calcular = () => {
    const mecautoModulos = {
      "MEN": valoresMec.MEN,
      "TRI": valoresMec.TRI,
      "SEM": valoresMec.SEM,
      "SEM2": valoresMec.SEM2,
      "ANU": valoresMec.ANU,
      "ANU2": valoresMec.ANU2,
      "ANU3": valoresMec.ANU3,
      "ANU4": valoresMec.ANU4
    }

    const boxModulos = {
      "MEN": valoresBox.MEN,
      "TRI": valoresBox.TRI,
      "SEM": valoresBox.SEM,
      "SEM2": valoresBox.SEM2,
      "ANU": valoresBox.ANU,
      "ANU2": valoresBox.ANU2,
      "ANU3": valoresBox.ANU3,
      "ANU4": valoresBox.ANU4
    }
    const marcados = listaAtual.filter(modulo => modulo.MARC === true)

    marcados.forEach(modulo => {
      for (const i in mecautoModulos) {
        mecautoModulos[i] = mecautoModulos[i] + modulo[i]
      }
      for (const i in boxModulos) {
        boxModulos[i] = boxModulos[i] + modulo[i]
      }
    })

    const valorTotalMec = valorTotal(mecautoModulos, descontoFilial, acessos)
    setTotalMecauto(valorTotalMec)

    const valorTotalBox = valorTotal(boxModulos, descontoFilial, acessos)
    setTotalBox(valorTotalBox)
  }

  useEffect(() => {
    Calcular()
  }, [sistema, acessos, listaAtual])



  return (
    <>
      <ToastContainer style={{ width: "770px", fontWeight: "bold" }} />
      <Button handleOpenSimulator={handleOpenSimulator} exibir={exibir} />
      {exibir && (
        <Container>
          <Titulo>Simule um novo orçamento:</Titulo>
          <ContainerSistema>
            <TituloSistema>ESCOLHA O SISTEMA:</TituloSistema>
            <ContainerRadio>
              <RadioSistema sistema="MECAUTO" handleCheckSystem={() => handleCheckSystem("mecauto")} />
              <RadioSistema sistema="MECAUTO-BOX" handleCheckSystem={() => handleCheckSystem("mecautoBox")} />
            </ContainerRadio>
          </ContainerSistema>
          <ContainerAcessos>
            <QtdAcessos handleChangeAccess={handleChangeAccess} />
          </ContainerAcessos>
          <ContainerModulos>
            <TituloModulos>
              <span>ESCOLHA OS MÓDULOS:</span>
            </TituloModulos>
            <Modulos>
              <CheckModulos listaAtual={listaAtual} handleCheckModulo={handleCheckModulo} />
            </Modulos>
          </ContainerModulos>
          <ContainerCard>
            <CardSistema valoresTotais={sistema === "mecauto" ? totalMecauto : totalBox} sistema={sistema === "mecauto" ? "MECAUTO" : "MECAUTO-BOX"} />
          </ContainerCard>
          <Obs>* Os descontos citados acima, são em comparação ao plano MENSAL.</Obs>
        </Container>
      )
      }
    </>
  )

}

export default Simulador
import { useEffect, useState } from "react"
import api from "../../services/services"
import CardFuncoes from "./CardFuncoes/CardFuncoes"

import { Container, Titulo, ContainerSistema, Sistema} from "./styles"

const Comparador = () => {
  const [carregando, setCarregando] = useState(true)
  const [listaAtual, setListaAtual] = useState()



  useEffect(() => {
    async function ObterFuncoes() {

      let listaFuncoes = []
      await api.get("/tabelas")
        .then(({ data }) => {
          listaFuncoes = data
        })

      let grupoFuncoes = 1
      const novaListaFuncoes = []

      listaFuncoes.forEach(funcao => {

        if (grupoFuncoes === funcao.CM_ORDEM_GRUPO) {

          if (novaListaFuncoes[funcao.CM_GRUPO]) {
            novaListaFuncoes[funcao.CM_GRUPO].push(funcao)
          } else {
            novaListaFuncoes[funcao.CM_GRUPO] = []
            novaListaFuncoes[funcao.CM_GRUPO].push(funcao)
          }
        } else {
          novaListaFuncoes[funcao.CM_GRUPO] = []
          novaListaFuncoes[funcao.CM_GRUPO].push(funcao)
          grupoFuncoes++
        }
      })


      setListaAtual(novaListaFuncoes)
      setCarregando(false)
    }

    ObterFuncoes()

  }, [])


  if (carregando) {
    return (
      <></>
    )
  } else {
    return (
      <Container>
        <Titulo>Compare a diferença entre os sistemas</Titulo>
        <ContainerSistema>
          <Sistema className="mecauto">MECAUTO</Sistema>
          <Sistema className="box">MECAUTO-BOX</Sistema>
        </ContainerSistema>
        {
          Object.keys(listaAtual).map(key => {
            return (
              <CardFuncoes key={key} name={key} grupo={listaAtual[key]} />
            )
          })
        }
      </Container>
    )
  }
}



export default Comparador
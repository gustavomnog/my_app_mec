import { useState, useEffect } from "react"
import axios from "axios"

import Topo from "./Topo/Topo"
import Orcamento from "./Orcamento/Orcamento"
import Loading from "../Loading/Loading"


const Proposta = () => {

  const [nome, setNome] = useState()
  const [validade, setValidade] = useState(new Date())
  const [listaAtual, setListaAtual] = useState([])
  const [valoresMecauto, setValoresMecauto] = useState([{}])
  const [valoresBox, setValoresBox] = useState([{}])

  const [carregando, setCarregando] = useState(true)


  useEffect(() => {
    let listaModulos = []
    let modulosProposta = []

    async function Consultar() {

      await axios.get('https://www.sistemacicom.com.br/api/proposta/435/10136')
        .then(({ data }) => {
          setNome(data.CM_NOME)
          setValidade(new Date(data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'))
        })

      await axios.get('https://www.sistemacicom.com.br/api/modulos/435')
        .then(({ data }) => listaModulos = data)

      await axios.get('https://www.sistemacicom.com.br/api/proposta/modulos/435')
        .then(({ data }) => modulosProposta = data)

      const lista = listaModulos.map(modulo => {
        const selecionado = modulosProposta.find(item => item.CM_COD_MODULO === modulo.CM_COD_MODULO)
        return {
          CODMODULO: modulo.CM_COD_MODULO,
          DESCRICAO: modulo.CM_DESCRICAO,
          ID: modulo.CM_NUM_ID,
          ANU: modulo.CM_VAL_ANU / 100,
          ANU2: modulo.CM_ANU_2 / 100,
          ANU3: modulo.CM_ANU_3 / 100,
          ANU4: modulo.CM_ANU_4 / 100,
          SEM: modulo.CM_VAL_SEM / 100,
          SEM2: modulo.CM_SEM_2 / 100,
          TRI: modulo.CM_VAL_TRI / 100,
          MEN: modulo.CM_VAL_MEN / 100,
          MARC: selecionado ? true : false
        }


      })

      setListaAtual(lista)


      await axios.get('https://www.sistemacicom.com.br/api/proposta/precosist/22')
        .then(({ data }) => {
          setValoresMecauto(data)
        })

      await axios.get('https://www.sistemacicom.com.br/api/proposta/precosist/35')
        .then(({ data }) => {
          setValoresBox(data)
        })
      setCarregando(false)

    }

    Consultar()

  }, [])

  if (carregando) {
    return (<Loading />)
  } else {
    return (
      <>
        <Topo nome={nome} validade={validade} />
        <Orcamento lista={listaAtual} valoresMecauto={valoresMecauto} valoresBox={valoresBox} />
      </>
    )
  }
}

export default Proposta
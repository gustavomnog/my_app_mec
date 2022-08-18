import { useState, useEffect } from "react"
import axios from "axios"

import Topo from "./Topo/Topo"
import Orcamento from "./Orcamento/Orcamento"


const Proposta = () => {
  let listaModulos = []
  let modulosProposta = []
  let valoresMecauto = []
  let valoresBox = []

  const [nome, setNome] = useState()
  const [validade, setValidade] = useState(new Date())
  const [listaAtual, setListaAtual] = useState([])

  useEffect(() => {
    async function Consultar() {

      await axios.get('https://www.sistemacicom.com.br/api/proposta/435/10136')
        .then(({ data }) => {
          setNome(data.CM_NOME)
          setValidade(new Date(data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'))
        })

      await axios.get('https://www.sistemacicom.com.br/api/modulos/435')
        .then(({ data }) => {
          listaModulos = data
        })

      await axios.get('https://www.sistemacicom.com.br/api/proposta/modulos/435')
        .then(({ data }) => {
          modulosProposta = data
        })

      await axios.get('https://www.sistemacicom.com.br/api/proposta/precosist/22')
        .then(({ data }) => {
          valoresMecauto = data
        })

      await axios.get('https://www.sistemacicom.com.br/api/proposta/precosist/35')
        .then(({ data }) => {
          valoresBox = data
        })

       
      const listaAtual = listaModulos.map(modulo => {
        const selecionado = modulosProposta.find(item => item.CM_COD_MODULO === modulo.CM_COD_MODULO)

        return {
          CODMODULO: modulo.CM_COD_MODULO,
          DESCRICAO: modulo.CM_DESCRICAO,
          ID: modulo.CM_NUM_ID,
          ANU: modulo.CM_VAL_ANU,
          ANU2: modulo.CM_ANU_2,
          ANU3: modulo.CM_ANU_3,
          ANU4: modulo.CM_ANU_4,
          SEM: modulo.CM_VAL_SEM,
          SEM2: modulo.CM_SEM_2,
          TRI: modulo.CM_VAL_TRI,
          MEN: modulo.CM_VAL_MEN,
          MARC: selecionado ? true : false
        }
      })

      setListaAtual(listaAtual)

    }
    Consultar()


  }, [])

  return (
    <>
      <Topo nome={nome} validade={validade} />
      <Orcamento lista={listaAtual} macauto={valoresMecauto} box={valoresBox}/>
    </>
  )
}

export default Proposta
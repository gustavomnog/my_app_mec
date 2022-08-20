import { useState, useEffect } from "react"
import axios from "axios"

import Topo from "./Topo/Topo"
import Orcamento from "./Orcamento/Orcamento"
import Loading from "../Loading/Loading"
import valorTotal from "../Acessos/Acessos"


const Proposta = () => {

  const [nome, setNome] = useState()
  const [validade, setValidade] = useState(new Date())
  const [acessos, setAcessos] = useState(0)
  const [descontoFilial, setDescontoFilial] = useState(0)
  const [listaAtual, setListaAtual] = useState([])
  const [totalMecauto, setTotalMecauto] = useState({})
  const [totalBox, setTotalBox] = useState({})




  const [carregando, setCarregando] = useState(true)


  useEffect(() => {
    let valoresMecauto = []
    let valoresBox = []
    let listaModulos = []
    let modulosProposta = []

    async function Consultar() {

      await axios.get('https://www.sistemacicom.com.br/api/proposta/435/10136')
        .then(({ data }) => {
          setNome(data.CM_NOME)
          setValidade(new Date(data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'))
          setAcessos(data.CM_ACESSOS)
          setDescontoFilial(data.CM_DESCONTO_FILIAL)
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
        .then(({ data }) => valoresMecauto = data)

      await axios.get('https://www.sistemacicom.com.br/api/proposta/precosist/35')
        .then(({ data }) => valoresBox = data)


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


      let valorMecModulos = valoresMecauto
      for (const i in valorMecModulos) {
        valorMecModulos[i] = valorMecModulos[i] + valoresModulos[i]
      }

      const valorTotalMec = valorTotal(valorMecModulos, descontoFilial, acessos)
      setTotalMecauto(valorTotalMec)



      let valorBoxModulos = valoresBox
      for (const i in valorBoxModulos) {
        valorBoxModulos[i] = valorBoxModulos[i] + valoresModulos[i]
      }

      const valorTotalBox = valorTotal(valorBoxModulos, descontoFilial, acessos)

      setTotalBox(valorTotalBox)

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
        <Orcamento
          lista={listaAtual}
          valorTotalMec={totalMecauto}
          valorTotalBox={totalBox}
          descontoFilial={descontoFilial}
          acessos={acessos}
        />
      </>
    )
  }
}

export default Proposta
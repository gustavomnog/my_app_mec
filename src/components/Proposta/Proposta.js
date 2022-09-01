import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

import Topo from "./Topo/Topo"
import Orcamento from "./Orcamento/Orcamento"
import Loading from "../Loading/Loading"
import valorTotal from "../Acessos/Acessos"
import Header from "../Header/Header"
import api from "../../services/services"
import Simulador from "../Simulador/Simulador";
import Comparador from "../Comparador/Comparador";


const Proposta = () => {
  let { codproposta, codcliente } = useParams()

  const [nome, setNome] = useState()
  const [validade, setValidade] = useState(new Date())
  const [acessos, setAcessos] = useState(0)
  const [descontoFilial, setDescontoFilial] = useState("")
  const [listaAtual, setListaAtual] = useState([])
  const [valoresMec, setValoresMec] = useState([])
  const [valoresBox, setValoresBox] = useState([])
  const [totalMecauto, setTotalMecauto] = useState({})
  const [totalBox, setTotalBox] = useState({})

  const [carregando, setCarregando] = useState(true)



  useEffect(() => {
    let listaModulos = []
    let modulosProposta = []

    async function Consultar() {

      await api.get(`/proposta/${codproposta}/${codcliente}`)
        .then(({ data }) => {
          setNome(data.CM_NOME)
          setValidade(new Date(data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'))
          setAcessos(data.CM_ACESSOS)
          setDescontoFilial(data.CM_DESCONTO_FILIAL)
        })

      await api.get(`/modulos/${codproposta}`)
        .then(({ data }) => listaModulos = data)

      await api.get(`/proposta/modulos/${codproposta}`)
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

      let valoresMecauto = []
      let valoresBox = []

      await api.get('/proposta/precosist/22')
        .then(({ data }) => {
          valoresMecauto = data
          setValoresMec(data)
        })

      const valorMecModulos = {
        "MEN": valoresMecauto.MEN,
        "TRI": valoresMecauto.TRI,
        "SEM": valoresMecauto.SEM,
        "SEM2": valoresMecauto.SEM2,
        "ANU": valoresMecauto.ANU,
        "ANU2": valoresMecauto.ANU2,
        "ANU3": valoresMecauto.ANU3,
        "ANU4": valoresMecauto.ANU4
      }

      await api.get('/proposta/precosist/35')
        .then(({ data }) => {
          valoresBox = data
          setValoresBox(data)
        })

      const valorBoxModulos = {
        "MEN": valoresBox.MEN,
        "TRI": valoresBox.TRI,
        "SEM": valoresBox.SEM,
        "SEM2": valoresBox.SEM2,
        "ANU": valoresBox.ANU,
        "ANU2": valoresBox.ANU2,
        "ANU3": valoresBox.ANU3,
        "ANU4": valoresBox.ANU4
      }


      const marcados = lista.filter(modulo => modulo.MARC === true)


      marcados.forEach(modulo => {
        for (const i in valorMecModulos) {
          valorMecModulos[i] = valorMecModulos[i] + modulo[i]
        }
        for (const i in valorBoxModulos) {
          valorBoxModulos[i] = valorBoxModulos[i] + modulo[i]
        }
      })

      const valorTotalMec = valorTotal(valorMecModulos, descontoFilial, acessos)
      setTotalMecauto(valorTotalMec)

      const valorTotalBox = valorTotal(valorBoxModulos, descontoFilial, acessos)
      setTotalBox(valorTotalBox)

      setCarregando(false)
  
    }
    Consultar()
  }, [])

  if (carregando) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
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
        <Simulador
          lista={listaAtual}
          valoresMec={valoresMec}
          valoresBox={valoresBox}
          descontoFilial={descontoFilial}
          acessosProposta={acessos}
        />
        <Comparador />
      </>
    )
  }
}

export default Proposta
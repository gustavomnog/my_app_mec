import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { valorAcesso } from '../../functions/general';
import { api } from '../../services/api';
import { Comparador } from '../Comparador';
import { GridSistemas } from '../GridSistemas';
import { Header } from '../Header';
import { Loading } from '../Loading';
import { Modulos } from '../Modulos';
import { Orcamento } from '../Orcamento';
import { Simulador } from '../Simulador';
import { Top } from '../Top';
import { Container, Bottom, Info } from './styles';

interface Modulo {
    codigo: string;
    descricao: string;
    id: string;
    sigla: string;
    anual: number;
    anual2: number;
    anual3: number;
    anual4: number;
    semestral: number;
    semestral2: number;
    trimestral: number;
    mensal: number;
    selecionado: boolean;
}

interface Sistema {
    nome: string;
    acessos: number;
    anual: number;
    anual2x: number;
    anual3x: number;
    semestral: number;
    semestral2x: number;
    trimestral: number;
    mensal: number;
    modulos: Modulo[];
}

export function Proposta() {
    const { codproposta, codcliente } = useParams()

    const [carregando, setCarregando] = useState(true)
    const [acessos, setAcessos] = useState(5)
    const [descontos, setDescontos] = useState(0)
    const [acrescimos, setAcrescimos] = useState(0)
    const [codCicom, setCodCicom] = useState(codcliente)
    const [codProposta, setCodProposta] = useState(codproposta)
    const [geradaEm, setGeradaEm] = useState(new Date())
    const [validade, setValidade] = useState(new Date())
    const [nome, setNome] = useState('')
    const [descontoFilial, setDescontoFilial] = useState(false)
    const [listaDeModulos, setListaDeModulos] = useState<Modulo[]>([{} as Modulo])
    const [mecauto, setMecauto] = useState<Sistema>({} as Sistema)
    const [mecautoBox, setMecautoBox] = useState<Sistema>({} as Sistema)
    const [mecautoNoModules, setMecautoNoModules] = useState<Sistema>({} as Sistema)
    const [mecautoBoxNoModules, setMecautoBoxNoModules] = useState<Sistema>({} as Sistema)





    useEffect(() => {
        async function Carregar() {
            const { data } = await api.get(`/proposta/${codproposta}/${codcliente}`)
            setAcessos(data.CM_ACESSOS + 5)
            setCodCicom(data.CM_COD_CICOM)
            setCodProposta(data.CM_COD_PROPOSTA)

            let trataData = data.CM_DATA.substring(0, 10) + 'T01:00:00'
            setGeradaEm(new Date(trataData))

            trataData = data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'
            setValidade(new Date(trataData))

            setNome(data.CM_NOME)
            setDescontoFilial(data.CM_DESCONTO_FILIAL === 'S' ? true : false)
            let auxDesconto = data.CM_DESCONTO_FILIAL === 'S' ? true : false

            let response = await api.get(`proposta/modulos/${codproposta}`)
            const modulosMarcados = response.data

            response = await api.get(`/modulos/${codproposta}`)
            const lista = await response.data.map((modulo: any) => {

                let marcado = modulosMarcados.filter((moduloMarcado: any) => {
                    return moduloMarcado.CM_COD_MODULO === modulo.CM_COD_MODULO
                }).length > 0


                return {
                    codigo: modulo.CM_COD_MODULO,
                    descricao: modulo.CM_DESCRICAO,
                    id: modulo.CM_NUM_ID,
                    sigla: modulo.CM_SIGLA,
                    anual: modulo.CM_VAL_ANU / 100,
                    anual2: modulo.CM_ANU_2 / 100,
                    anual3: modulo.CM_ANU_3 / 100,
                    anual4: modulo.CM_ANU_4 / 100,
                    semestral: modulo.CM_VAL_SEM / 100,
                    semestral2: modulo.CM_SEM_2 / 100,
                    trimestral: modulo.CM_VAL_TRI / 100,
                    mensal: modulo.CM_VAL_MEN / 100,
                    selecionado: marcado
                }
            })

            setListaDeModulos(lista)

            response = await api.get('/proposta/precosist/22')
            let precos = response.data

            setMecautoNoModules({
                nome: 'mecauto',
                acessos: data.CM_ACESSOS + 5,
                anual: precos.ANU,
                anual2x: precos.ANU2,
                anual3x: precos.ANU3,
                semestral: precos.SEM,
                semestral2x: precos.SEM2,
                trimestral: precos.TRI,
                mensal: precos.MEN,
                modulos: []
            })


            lista.forEach((modulo: Modulo) => {
                if (modulo.selecionado) {
                    precos.ANU += modulo.anual
                    precos.ANU2 += modulo.anual2
                    precos.ANU3 += modulo.anual3
                    precos.ANU4 += modulo.anual4
                    precos.SEM += modulo.semestral
                    precos.SEM2 += modulo.semestral2
                    precos.TRI += modulo.trimestral
                    precos.MEN += modulo.mensal
                }
            })


            precos.ANU = valorAcesso(precos.ANU, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.ANU2 = valorAcesso(precos.ANU2, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 2)
            precos.ANU3 = valorAcesso(precos.ANU3, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 3)
            precos.ANU4 = valorAcesso(precos.ANU4, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 4)
            precos.SEM = valorAcesso(precos.SEM, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.SEM2 = valorAcesso(precos.SEM2, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 2)
            precos.TRI = valorAcesso(precos.TRI, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.MEN = valorAcesso(precos.MEN, auxDesconto, (data.CM_ACESSOS), descontos, acrescimos, 1)


            setMecauto({
                nome: 'mecauto',
                acessos: data.CM_ACESSOS + 5,
                anual: precos.ANU,
                anual2x: precos.ANU2,
                anual3x: precos.ANU3,
                semestral: precos.SEM,
                semestral2x: precos.SEM2,
                trimestral: precos.TRI,
                mensal: precos.MEN,
                modulos: lista
            })

            response = await api.get('/proposta/precosist/35')
            precos = response.data

            setMecautoBoxNoModules({
                nome: 'mecautobox',
                acessos: data.CM_ACESSOS + 5,
                anual: precos.ANU,
                anual2x: precos.ANU2,
                anual3x: precos.ANU3,
                semestral: precos.SEM,
                semestral2x: precos.SEM2,
                trimestral: precos.TRI,
                mensal: precos.MEN,
                modulos: []
            })

            lista.forEach((modulo: Modulo) => {
                if (modulo.selecionado) {
                    precos.ANU += modulo.anual
                    precos.ANU2 += modulo.anual2
                    precos.ANU3 += modulo.anual3
                    precos.ANU4 += modulo.anual4
                    precos.SEM += modulo.semestral
                    precos.SEM2 += modulo.semestral2
                    precos.TRI += modulo.trimestral
                    precos.MEN += modulo.mensal
                }
            })

            precos.ANU = valorAcesso(precos.ANU, false, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.ANU2 = valorAcesso(precos.ANU2, false, (data.CM_ACESSOS), descontos, acrescimos, 2)
            precos.ANU3 = valorAcesso(precos.ANU3, false, (data.CM_ACESSOS), descontos, acrescimos, 3)
            precos.ANU4 = valorAcesso(precos.ANU4, false, (data.CM_ACESSOS), descontos, acrescimos, 4)
            precos.SEM = valorAcesso(precos.SEM, false, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.SEM2 = valorAcesso(precos.SEM2, false, (data.CM_ACESSOS), descontos, acrescimos, 2)
            precos.TRI = valorAcesso(precos.TRI, false, (data.CM_ACESSOS), descontos, acrescimos, 1)
            precos.MEN = valorAcesso(precos.MEN, false, (data.CM_ACESSOS), descontos, acrescimos, 1)

            setMecautoBox({
                nome: 'mecautobox',
                acessos: data.CM_ACESSOS + 5,
                anual: precos.ANU,
                anual2x: precos.ANU2,
                anual3x: precos.ANU3,
                semestral: precos.SEM,
                semestral2x: precos.SEM2,
                trimestral: precos.TRI,
                mensal: precos.MEN,
                modulos: lista
            })


            setCarregando(false)

        }
        Carregar()

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
                <Header />
                <Container>
                    <Top nome={nome} validade={validade} />
                    <Orcamento>
                        <Modulos modulos={listaDeModulos} />
                        <GridSistemas mecauto={mecauto} mecautoBox={mecautoBox} />
                        <Info>* Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</Info>
                        <Info>* Os descontos citados acima, são em comparação ao plano MENSAL.</Info>
                    </Orcamento>
                    <Simulador modulos={listaDeModulos} mecauto={mecautoNoModules} mecautoBox={mecautoBoxNoModules} acessos={acessos} descontoFilial={descontoFilial} descontos={descontos} acrescimos={acrescimos} />
                    <Comparador />
                    <Bottom />
                </Container>


            </>
        )
    }

}
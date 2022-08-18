import { format } from "date-fns"
import Header from "../../Header/Header"

import { Container, Texto, Titulo, Validade } from "./styles"



const Topo = ({ nome, validade }) => {


  return (
    <>
      <Header />
      <Container>
        <Titulo>Olá, {nome}! Tudo bem?</Titulo>
        <Texto>Conforme combinado, aqui está o orçamento para aquisição da licença do sistema da CICOM. Lembrando que algumas funções já estão inclusas nos sistemas, como por exemplo:<b> cadastro de clientes, produtos, fornecedores, profissionais, usuários, seguradoras, controle de estoque, entrada de produtos por XML, diversos relatórios</b> e muito mais!</Texto>
        <Texto>Quanto aos módulos, você contrata somente o que realmente precisar.</Texto>
        <Texto><b>Importante:</b> a qualquer momento você poderá remover e/ou acrescentar novos módulos em seu plano.</Texto>
        <Validade>
          <span className={validade < new Date() ? "vencida" : ""}>Proposta válida até: {format(validade, 'dd/MM/yyyy')}</span>
        </Validade>
      </Container>
    </>
  )
}


export default Topo
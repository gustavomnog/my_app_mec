import styled from "styled-components"


const Container = styled.div`
margin: 0 15.5px 27px 15.5px;
border: 1px solid #C2C3C5;
border-radius: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Titulo = styled.div`
margin: 20px;
font-weight: 800;
font-size: 20px;
`

const Tabela = styled.table`
margin: 15px;
font-size: 20px;
text-transform: capitalize;
`
const BodyTabela = styled.tbody`

`
const LinhaTabela = styled.tr`


.icon {
  width: 25px;
  height:25px;
  color: var(--green-dark);
}

.iconBan{
  color: var(--red);
}
.funcao{
  width: 430px;
}

.mecauto{
  width: 175px;
  
}
`
const CelulaTabela = styled.td`
padding: 5px 0;
`

export { Container, Titulo, Tabela, BodyTabela, LinhaTabela, CelulaTabela }
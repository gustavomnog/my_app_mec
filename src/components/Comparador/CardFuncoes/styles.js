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
`
const BodyTabela = styled.tbody`

`
const LinhaTabela = styled.tr`
width:100%;
display: flex;
align-items: center;
justify-content: space-between;

.icon {
  width: 25px;
  height:25px;
  color: var(--green-dark);
}

.iconBan{
  color: var(--red);
}

.funcao{
  text-transform: capitalize;
  width: 365px;
 
  .iconHelp{
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue);
    margin-left: 5px;
    cursor: pointer;
  }

  span{
    display: block;
    font-size: 13px;
    text-transform: none;
    margin-top: 5px;
  }
}

.mecauto{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-right: 30px;
  
  span{
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
}
}

.box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  span{
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
}
}
`
const CelulaTabela = styled.td`
padding: 5px 0;
`

const ButtonExibir = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100%;
margin: 11px 0 22px 0;

button{
  outline: none;
  border: none;
  background: none;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  color: var(--grey);
}

.icon{
  color: var(--red-dark);
  height: 1.5em;
  width: 1.5em;
  margin-left: 3px;
}
`

export { Container, Titulo, Tabela, BodyTabela, LinhaTabela, CelulaTabela, ButtonExibir }
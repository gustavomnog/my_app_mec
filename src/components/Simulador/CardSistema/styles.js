import styled from "styled-components"

const Container = styled.div`
width: 100%;
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
border-radius: 30px;
padding-bottom: 5px;
`

const Titulo = styled.div`
height: 75px;
background-color: var(--blue);
border-radius: 30px 30px 0px 0px;
color: var(--white);
font-size: 20px;
font-weight: 800;
text-align: center;
padding: 21px 0;
`

const Tabela = styled.div`


table {
  width: 100%;
  border-spacing: 0;
  padding: 0 10px;
  margin-bottom: 10px;
}

th, td{
  padding: 12px 0;
  border-bottom: 1px solid var(--grey);
}

td {
  font-size: 15px;
  text-align: center;
}

th {
  text-align: left;
}
tr{
  font-weight: 500;
}

span{
  display: block;
  font-weight: 400;
  font-size: 10.84px;
  margin-top: 1px;
}

.title th{
text-align:center;
}

.men th, .men td{
  border: none;
}



`

export { Container, Titulo, Tabela }
import styled from "styled-components"


const Container = styled.div`
width: 764px;  
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);  
border-radius: 30px;
margin: 34px auto 0 auto;
background-color: var(--background-white);
`

const Titulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px 30px 0 0;
height: 51px;
font-weight: 700;
font-size: 28px;
color: #FFFFFF;
background: var(--background-red);
`

const ContainerModulos = styled.div`
padding: 15.5px 0 0 0;
margin: 15.5px;
border: 1px solid #C2C3C5;
border-radius: 30px;
text-align:center;

`

const TituloModulos = styled.div`
margin-bottom: 11px;
font-size: 17px;
`

const Modulos = styled.div`
display: flex;
flex-wrap: wrap ;
flex-direction: column;
height: 145px;
align-content: space-around;
`

const ContainerCards = styled.div`
display: flex;
justify-content: space-between;
margin: 25px 15.5px 15.5px 15.5px;
`

const Obs = styled.div`
margin: 0 15.5px;
padding: 0 10px;

span{
  display: block;
  font-size: 13px;
  margin-bottom: 7px;
  font-weight: 500;
}

span:last-child{
  display: block;
  font-size: 13px;
  padding-bottom: 13px;
}
`


export { Container, Titulo, ContainerModulos, TituloModulos, Modulos, ContainerCards, Obs }
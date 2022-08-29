import styled from "styled-components"


const Container = styled.div`
width: 764px;  
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);  
border-radius: 30px;
margin: 34px auto 0 auto;
background-color: var(--background-white);
margin-bottom: 38px;
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

const ContainerSistema = styled.div`
margin: 20px;
border: 1px solid #C2C3C5;
border-radius: 30px;
text-align:center;
`

const TituloSistema = styled.div`
margin: 11px 0 20px 0;
font-weight: 800;
font-size: 20px;
`

const ContainerRadio = styled.div`
display:flex;
justify-content:space-between;
width: 370px;
margin: 0 auto;
padding-bottom: 16.13px;
`

const ContainerAcessos = styled.div`
margin: 20px;
border: 1px solid #C2C3C5;
border-radius: 30px;
text-align:center;
`

const ContainerModulos = styled.div`
margin: 15.5px;
border: 1px solid #C2C3C5;
border-radius: 30px;
text-align:center;

`

const TituloModulos = styled.div`
margin: 11px 0 20px 0;
font-weight: 800;
font-size: 20px;
`

const Modulos = styled.div`
display: flex;
flex-wrap: wrap ;
flex-direction: column;
height: 145px;
align-content: space-around;
`

const ContainerCard = styled.div`
margin: 0 15.5px;
`

const Obs = styled.div`
margin: 0 30px;
padding: 20px 0;
font-size: 13px;
font-weight: 500;
`

export { Container, Titulo, ContainerSistema, TituloSistema, ContainerRadio, ContainerAcessos, ContainerModulos, TituloModulos, Modulos, ContainerCard, Obs }
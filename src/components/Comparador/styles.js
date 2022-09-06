import styled from "styled-components"


const Container = styled.div`
width: 764px;  
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);  
border-radius: 30px;
margin: 34px auto 0 auto;
background-color: var(--background-white);
margin-bottom: 38px;
padding-bottom: 1px;
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
display:flex;
justify-content:flex-end ;
padding: 20px 39px;

.mecauto{
  background-color: var(--blue);
  margin-right:20px;
}

.box{
  background-color: var(--green-dark);
}
`

const Sistema = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 157px;
height: 41px;
border-radius: 20px;
font-size: 15px;
font-weight: 700;
color: var(--white);
` 

export {Container, Titulo, ContainerSistema, Sistema}
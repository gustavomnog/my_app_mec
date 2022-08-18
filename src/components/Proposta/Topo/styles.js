import styled from "styled-components"



const Container = styled.div`
width: 764px;  
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);  
border-radius: 30px;
background  : var(--background-white);
margin: 34px auto 0 auto;
`
const Titulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px 30px 0 0;
height: 51px;
font-weight: 700;
font-size: 28px;
color: var(--white);
background: var(--background-red);
`
const Texto = styled.p`
  padding: 20px 17px 0 17px;
  font-size: 1.25rem;
  line-height: 1.87rem;
  text-align: justify;
`

const Validade = styled.p`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 12px 0 20px 0;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: var(--green);


  .vencida{
    color: var(--red);
  }

`

export { Container, Titulo, Texto, Validade }
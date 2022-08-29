import styled from "styled-components"



const Titulo = styled.div`
margin: 11px 0 20px 0;
font-weight: 800;
font-size: 20px;
`
const Input = styled.div`
width: 100%;
display: flex;
justify-content: center;


input{
  outline: none;
  border: 0;
  width: 48px;
  font-size: 20px;
  border-bottom: 1px solid #797A7B;
  text-align: center;
}
`
const Obs = styled.div`
margin: 29px 0 17px 0;
font-size: 13px;
`

export { Titulo, Input, Obs }
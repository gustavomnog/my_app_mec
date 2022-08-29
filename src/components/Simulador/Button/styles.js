import styled from "styled-components";

const Container = styled.div`
 display: flex;
 justify-content:center;
 margin: 45px 0;


button {
  display:flex;
  justify-content:center;
  align-items:center;
  border: 0;
  outline: none;
  width: 328px;
  height: 61.27px;
  background: var(--background-red);
  border-radius: 30px;
  color: var(--white);
  font-size: 22px;
  font-weight: 500;
  transition: background 0.2s linear;
}

button:hover{
  background: rgb(173, 17, 17);
}

.icon{
  height:1.4em;
  width:1.4em;
  margin-left: 10px;
}
 `

export { Container }
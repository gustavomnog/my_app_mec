import styled from "styled-components"


const Container = styled.div`
padding-bottom: 16.13px;


.container {
  display: flex;
  align-items: center;
}
  
.containerBold {
  display: flex;
  align-items: center;
  font-weight: bold;
}


.input-wrapper {
  position: relative;
  width: 0px;
  height: 20px;
  padding-right: 25px;
}

input{
  opacity:0 ;
  width: 0;
  height: 0;
}

input:checked + .checkmark {
  background-color: var(--blue);
}

input:checked + .checkmark::after{
  display: block;
}


.checkmark{
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--background-white);
  border: 2px solid var(--blue);
  border-radius: 5px; 
}

.checkmark::after {
content: "";
position: absolute;
display: none;
left: 4px;
width: 5px;
height: 10px;
border: 1px solid #FFFFFF;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}
`


export { Container }



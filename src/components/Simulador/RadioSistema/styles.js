import styled from "styled-components"

const Container = styled.div`



.containerMecauto {
  display: flex;
  font-weight: 800;
  font-size: 20px;
  color: var(--blue);
  
  
  .input-wrapper {
    position: relative;
    padding-right: 20px;
  }
  
  input{
    opacity:0 ;
    width: 0;
    height: 0;
  }
  
  input:checked + .checkmark {
    background-color: var(--white);
    
  }
  
  input:checked + .checkmark::after{
    display: block;
  }
  
  
  .checkmark{
    position: absolute;
    top: 4px;
    height: 16px;
    width: 16px;
    border: 2px solid var(--blue);
    border-radius: 50%; 
  }
  
  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    background: var(--blue);
  }
}
  
  .containerBox {
    display: flex;
    font-weight: 800;
  font-size: 20px;
  color: var(--green-dark);
  
  
  .input-wrapper {
    position: relative;
    padding-right: 20px;
  }
  
  input{
    opacity:0 ;
    width: 0;
    height: 0;
  }
  
  input:checked + .checkmark {
    background-color: var(--white);
    
  }
  
  input:checked + .checkmark::after{
    display: block;
  }
  
  
  .checkmark{
    position: absolute;
    top: 4px;
    height: 16px;
    width: 16px;
    border: 2px solid var(--green-dark);
    border-radius: 50%; 
  }
  
  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    background: var(--green-dark);
  }
}
`

export default Container
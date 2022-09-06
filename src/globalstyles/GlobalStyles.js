
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
     --red: #CA2828;
     --red-dark: #AD1818;
     
     --blue: #334B88;

     --green-dark: #2D6D3F;
     
     --grey: #474747; 
    
     --white: #FFFFFF;
     
     --background: #E5E5E5;
     --background-grey: linear-gradient(360deg, #B4B4B4 0%, #EAEAEA 100%);
     --background-red: linear-gradient(90deg, #AD1818 0%, #741415 100%, #741415 100%)    ;
     --background-white: #FFFFFF;
    }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }


  html {
      font-size: 16px;
      color: var(--grey);

      @media (max-width: 1080px){
          font-size: 93.75%; //15px
      }

      @media (max-width: 720px){
          font-size: 87.5%; //14px
      }

      @media (max-width: 640px){
          font-size: 82.5%; 
      }
  }

  body {
      background-color: var(--background);
  }

  body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }

  button {
      cursor: pointer;
  }
`

export default GlobalStyles
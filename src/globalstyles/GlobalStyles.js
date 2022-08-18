
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
     --red: #CA2828;
     --red-dark: #E40D0D;
     
     --blue: #334B88;
     --blue-light: rgba(191, 204, 237, 0.5);

     --green: #19962D;
     --green-dark: #2D6D3F;
     --green-light: rgba(138, 235, 165, 0.2);
     
     --grey: #474747; 
     --grey-light: rgba(196, 196, 196, 0.1);
     --grey-dark: #7C7979;
    
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

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
  }

  button {
      cursor: pointer;
  }
`

export default GlobalStyles
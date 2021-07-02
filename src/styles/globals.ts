import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{ margin: 0; padding: 0; box-sizing: border-box; }

  body {
   background: #fff;
   font-family: 'Montserrat', sans-serif;
  }

  input,button{
    border: none;
    background: none;
  }
  
  ul{ list-style: none }
`

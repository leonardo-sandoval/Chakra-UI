import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Header from './Header.jsx'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header/>
    </ChakraProvider>
    
  </React.StrictMode>,
)

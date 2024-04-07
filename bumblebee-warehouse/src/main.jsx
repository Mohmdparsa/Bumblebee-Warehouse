import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './page/store.js'
import { ThemeProvider} from "@mui/material/styles";
import { theme } from './theme/Theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
    </Provider>
   
  </React.StrictMode>,
)

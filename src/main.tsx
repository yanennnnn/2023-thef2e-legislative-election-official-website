import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App'
import GlobalStyle from '@/styles/global' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import 'notyf/notyf.min.css'
import './App.css'
import App from './App'
import { AppProvider } from './context'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

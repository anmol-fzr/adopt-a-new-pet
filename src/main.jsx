import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import { BrowserRouter } from "react-router-dom"
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
)

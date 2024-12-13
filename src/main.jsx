import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

window.onload = function() {
  document.getElementById('root').oncontextmenu = function() {
    alert('função desabilitada!')
    return false;
  }
}
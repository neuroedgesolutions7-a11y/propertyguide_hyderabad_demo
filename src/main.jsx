import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './hooks/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
)

const loader = document.getElementById('app-loader')
if (loader) {
  loader.classList.add('loaded')
  window.setTimeout(() => loader.remove(), 320)
}

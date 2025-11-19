import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import { App } from './app'

const rootElement = document.getElementById('app')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

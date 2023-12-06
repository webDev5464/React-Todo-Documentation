import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./components/styles/index.css"
import ContextProvider from './components/configs/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('private')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)

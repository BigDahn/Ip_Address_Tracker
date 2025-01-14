
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AddressProvider } from './contexts/Addresscontext.jsx'

createRoot(document.getElementById('root')).render(

    <AddressProvider>
    <App />
    </AddressProvider>
  
)


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FeedbackProvider } from './context/FeedbackContext.jsx'

createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
       <App />
    </FeedbackProvider>
    
)



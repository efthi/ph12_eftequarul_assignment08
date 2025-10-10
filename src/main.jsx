import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    //এখান থেকে react router ইনিশিয়েট করে ইউজ করা হয়েছে
    <RouterProvider router= {router} /> 
  </StrictMode>,
)

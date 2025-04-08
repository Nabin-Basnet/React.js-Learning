import { StrictMode } from 'react'
import { BrowserRouter } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
// import HOmepage from './pages/home.jsx'
import LearnUseEffect from './pages/learUseEffect.jsx'
import Loginpage from './pages/loginpage.jsx'
import AppRouter from './routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouter/>
      {/* <LearnUseEffect />
      <Loginpage /> */}
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HOmepage from './pages/home.jsx'
import LearnUseEffect from './pages/learUseEffect.jsx'
import Loginpage from './pages/loginpage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LearnUseEffect />
    <Loginpage />
  </StrictMode>,
)

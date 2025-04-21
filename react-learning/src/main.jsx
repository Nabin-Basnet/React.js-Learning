import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router"
import './index.css'
// import HOmepage from './pages/home.jsx'
import router from '../route-data-mode.jsx'
// import Navbar from './components/ui/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/> */}
      <RouterProvider router={router} />

  </StrictMode>
)

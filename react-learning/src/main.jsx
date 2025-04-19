import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router"
import './index.css'
// import HOmepage from './pages/home.jsx'
import router from '../route-data-mode.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <AppRouter/>
 
    </BrowserRouter> */}
      <RouterProvider router={router} />

  </StrictMode>,
)

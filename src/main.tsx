import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from '@/pages/Explore.tsx'
import Approvals from '@/pages/Approvals.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/explore' element={<Explore />} />
        <Route path='/approvals' element={<Approvals />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

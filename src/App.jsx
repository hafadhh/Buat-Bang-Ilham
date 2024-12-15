import { Toaster } from 'sonner'
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import RequestOrder from './pages/ProfileCustomer.jsx'
import Dashboard from './pages/DashboardMitra.jsx';


import Layanan from './pages/Layanan.jsx'

import Request from './pages/SubmitOrder.jsx';
import Freelancer from './pages/freelancer.jsx';
import ProfilePage from './pages/ProfileCustomer.jsx';
import Haha from './pages/BangRehan.jsx';

function App() {
        
  return (
    <>
    <Toaster />
    {/* <Routes>
      <Route element={<Layanan />} path="/"/>
      <Route element={<WorkerDashboard />} path="/sign-up"/>
      <Route element={<RequestOrder />} path="/login"/>
      <Route element={<ListOrder />} path="/dashboard"/>
    </Routes> */}


        <Routes>
        {/* <Route path="/" element={<DashboardAdmin />} />  
        <Route path="/user" element={<User />} />   */}

        <Route path="/rehan" element={<Haha />} />  


        <Route path="/" element={<Request />} />  
        <Route path="/profile-page" element={<ProfilePage />} />  
        <Route path="/freelancer" element={<Freelancer />} />


        {/* <Route path="/ProfilePage/daftar-riwayat-pesanan" element={<Dashboard />} /> */}
        <Route path="/uhuy" element={<Layanan />} />

      </Routes>
    </>
  )
}

export default App

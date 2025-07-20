import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LandingPage from './LandingPage'
import AdminPage from './AdminPage'
import StudentPage from './StudentPage'
import Error from './Error'
import AdminAccountCreate from './AdminAccountCreate'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/AdminPage' element={<AdminPage/>}/>
    <Route path='/StudentPage' element={<StudentPage/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route path='/AdminAccountCreate' element={<AdminAccountCreate/>}/>
   </Routes>
   </BrowserRouter>
   </React.Fragment>
  )
}

export default App
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LandingPage from './LandingPage'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
   </Routes>
   </BrowserRouter>
   </React.Fragment>
  )
}

export default App
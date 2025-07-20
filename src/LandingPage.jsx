import React from 'react'
import {Link} from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


const LandingPage = () => {
  return (
    <React.Fragment>
        <div className='bg-amber-600 text-center text-5xl p-5 text-white font-medium h-fit'>
          <h1 className='text-green-900'>Library Management System</h1>
          <h1 className='mt-5'>Check The Login</h1>
          <div className=' mt-10 flex flex-row gap-10 text-center'>
            <div className=' w-1/2 flex justify-center items-center text-6xl text-center rounded-4xl '>
             <Link to="/AdminPage"> <h1 className='bg-green-400 rounded-4xl w-fit p-10 hover:shadow-2xl hover:text-blue-900 hover:bg-white'>Admin <SupervisorAccountIcon fontSize='large' color='secondary'/></h1></Link>
            </div>
            <div className=' w-1/2 h-100 text-6xl flex justify-center items-center text-center rounded-4xl'>
               <Link to="/StudentPage"> <h1 className='bg-green-400 text-5xl rounded-4xl w-fit p-10 hover:shadow-2xl hover:text-blue-900 hover:bg-white'>Student <LocalLibraryIcon fontSize='large' color='disabled'/></h1></Link>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default LandingPage
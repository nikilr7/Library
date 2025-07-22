import React, { useRef } from 'react'
import Naving from './Navbar'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const AdminPage = () => {

  const [check, setCheck] = React.useState([]);
    
    const username=useRef("");
    const password=useRef("");

    useEffect(() => {
          axios.get("http://localhost:8080/Admin/FindAllAdmin")
        .then((resp)=>
        {
          setCheck(resp.data.data);
          console.log(resp.data.data);
        })
        .catch((err)=>
        {
          console.log(err);
        })
      },[]);
      

   async function verify(e)
    {
        e.preventDefault();


    }
    
  return (
    <React.Fragment>
        <Naving value={"Admin"}/>
         <form onSubmit={(e)=>{verify(e)}} className='text-center m-20'>
            <label className='text-5xl font-bold text-gray-600'>USERNAME :</label> <input 
            ref={username}
            type="text"
             className='border-4 border-amber-500 outline-0 rounded-3xl text-5xl font-bold'
              placeholder='Enter The Name' />
            <label className='text-5xl font-bold text-gray-600 mt-10'>PASSWORD :</label> <input
            ref={password}
             type="password" 
            className='border-4 mt-10 outline-0 border-amber-500 rounded-3xl text-5xl font-bold ' placeholder='Enter The Password'/>
            <button type='submit' className='border-red-500 text-center p-3 border w-50 block text-4xl font-bold rounded-4xl mt-10 ml-120 hover:bg-green-600 hover:text-white'>Verify <DoneIcon fontSize='large' color='secondary'/> </button>
            <div className='mt-3'>
                <h1 className='text-2xl inline font-bold'>Create Your Account--{">"}</h1>
                <Link className='inline-flex' to="/AdminAccountCreate"><h1 className='hover:text-blue-800 text-xl font-bold'>create Account</h1></Link>
            </div>

        </form> 
        
    </React.Fragment>
  )
}

export default AdminPage


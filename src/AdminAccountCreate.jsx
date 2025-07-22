import React from 'react'
import { useFormik } from 'formik'
import Naving from './Navbar'
import { Schema } from './AdminCreateFormyup'
import { toast } from 'react-toastify'
import axios from 'axios';

async function onSubmit(values,action)
{
  console.log(values);
  axios.post("http://localhost:8080/Admin/AddingBooks",values);
  toast.success("Created");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  action.resetForm();
}

const AdminAccountCreate = () => {
  const {values,handleBlur,handleChange,handleSubmit,touched,errors}=useFormik({
    initialValues: {
      adminname: '',
      bookname: '',
      category: '',
      establishDate:'',
      totalPages:'',
      password:'',
    },
    validationSchema:Schema,
    onSubmit,
  })
  console.log(touched);
  return (
    <React.Fragment>
      <Naving value={"Admin Account Creation Form"}/>

    <form onSubmit={(e)=>{handleSubmit(e)}} className='grid grid-cols-2 justify-center mt-10 mr-20'>

      <label className='text-4xl ml-70 font-bold text-gray-700 mr-10'>Admin Name</label>
      <input 
      type="text" 
      name="adminname"
      onChange={(e)=>{handleChange(e)}}
      value={values.adminname}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.adminname && errors.adminname ? 'border-red-500' : ''}`}
      placeholder='Enter The Admin Name'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Book Name</label>
      <input 
      type="text" 
      name="bookname"
      onChange={(e)=>{handleChange(e)}}
      value={values.bookname}
      onBlur={handleBlur}
     className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.bookname && errors.bookname ? 'border-red-500' : ''}`}
      placeholder='Enter The Book Name'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Book Category</label>
      <input 
      type="text" 
      name="category"
      onChange={(e)=>{handleChange(e)}}
      value={values.category}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.category && errors.category ? 'border-red-500' : ''}`}
      placeholder='Enter The Book Category'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Establish Date</label>
      <input 
      type="text" 
      name="establishDate"
      onChange={(e)=>{handleChange(e)}}
      value={values.establishDate}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.establishDate && errors.establishDate ? 'border-red-500' : ''}`}
      placeholder='DD/MM/YYYY'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Total Pages</label>
      <input 
      type="number" 
      name="totalPages"
      onChange={(e)=>{handleChange(e)}}
      value={values.totalPages}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.totalPages && errors.totalPages ? 'border-red-500' : ''}`}
      placeholder='Enter the Total Pages'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Password</label>
      <input 
      type="password" 
      name="password"
      onChange={(e)=>{handleChange(e)}}
      value={values.password}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.password && errors.password ? 'border-red-500' : ''}`}
      placeholder='Enter the Password'
      />

      <button 
      type='submit' 
      className='border-2 w-50 ml-120 bg-green-500 mt-10 text-white font-bold border-green-800 rounded-4xl text-4xl hover:border-amber-700 hover:bg-amber-500'
       >Submit</button>


    </form>
    </React.Fragment>
  )
}

export default AdminAccountCreate
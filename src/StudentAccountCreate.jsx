import React from 'react'
import { useFormik } from 'formik'
import Naving from './Navbar'
import { Schema } from './StudentAccountCreateYup'
import { toast } from 'react-toastify'
import axios from 'axios';

async function onSubmit(values,action)
{
  console.log("Check");
  console.log(values);
 await axios.post("http://localhost:8080/Student/AccountCreation",values);
  toast.success("Created");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  action.resetForm();
}

const StudentAccountCreate = () => {
  const {values,handleBlur,handleChange,handleSubmit,touched,errors}=useFormik({
    initialValues: {
      rollNo: '',
      name: '',
      section: '',
      dateOfBirth:'',
      address:'',
      phone:'',
      password:''
    },
    validationSchema:Schema,
    onSubmit,
  })
  return (
    <React.Fragment>
      <Naving value={"Student Account Creation Form"}/>

    <form onSubmit={handleSubmit} className='grid grid-cols-2 justify-center mt-10 mr-20'>

      <label className='text-4xl ml-70 font-bold text-gray-700 mr-10'>Roll Number</label>
      <input 
      type="text" 
      name="rollNo"
      onChange={(e)=>{handleChange(e)}}
      value={values.rollNo}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.rollNo && errors.rollNo ? 'border-red-500' : ''}`}
      placeholder='Enter The Roll Number'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Name</label>
      <input 
      type="text" 
      name="name"
      onChange={(e)=>{handleChange(e)}}
      value={values.name}
      onBlur={handleBlur}
     className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.name && errors.name ? 'border-red-500' : ''}`}
      placeholder='Enter The Name'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Section</label>
      <input 
      type="text" 
      name="section"
      onChange={(e)=>{handleChange(e)}}
      value={values.section}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.section && errors.section ? 'border-red-500' : ''}`}
      placeholder='Enter The Section'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>date Of Birth</label>
      <input 
      type="text" 
      name="dateOfBirth"
      onChange={(e)=>{handleChange(e)}}
      value={values.dateOfBirth}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.dateOfBirth && errors.dateOfBirth ? 'border-red-500' : ''}`}
      placeholder='DD/MM/YYYY'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Address</label>
      <input 
      type="text" 
      name="address"
      onChange={(e)=>{handleChange(e)}}
      value={values.address}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.address && errors.address ? 'border-red-500' : ''}`}
      placeholder='Enter the Address'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Phone</label>
      <input 
      type="text" 
      name="phone"
      onChange={(e)=>{handleChange(e)}}
      value={values.phone}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.phone && errors.phone ? 'border-red-500' : ''}`}
      placeholder='Enter the Phone Number'
      />

      <label className='text-4xl ml-70 mt-10 font-bold text-gray-700 mr-10'>Password</label>
      <input 
      type="password" 
      name="password"
      onChange={(e)=>{handleChange(e)}}
      value={values.password}
      onBlur={handleBlur}
      className={`border-4 border-amber-600 mt-10 mr-20 rounded-4xl  text-4xl outline-0 font-bold ${ touched.password && errors.password ? 'border-red-500' : ''}`}
      placeholder='Enter the password'
      />

      <button 
      type='submit' 
      className='border-2 w-50 ml-120 bg-green-500 mt-10 text-white font-bold border-green-800 rounded-4xl text-4xl hover:border-amber-700 hover:bg-amber-500'
       >Submit</button>

    </form>
    </React.Fragment>
  )
}

export default StudentAccountCreate
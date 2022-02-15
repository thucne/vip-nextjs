import Login from '@components/Auth/Login'
import Register from '@components/Auth/Register'
import React, { useState } from 'react'

/**
* @author
* @function 
**/

 const LoginHome = (props) => {
    const [authPage, setAuthPage] = useState(0)
  return(
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-[#e96443] to-[#904e95]'>
      <div className='w-full h-full md:w-[600px] md:h-[600px] bg-[#eeeeee] rounded-xl' >
          {
              authPage === 0 ? <Login setAuthPage={setAuthPage} /> : <Register setAuthPage={setAuthPage}/>
          }
      </div>
    </div>
   )

 }
 export default LoginHome
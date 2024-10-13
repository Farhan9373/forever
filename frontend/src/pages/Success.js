import React from 'react'
import success from '../assest/success.gif.gif'
import {Link} from 'react-router-dom'
const Success = () => {
  return (
    <div className=' container mx-auto px-4'>
    <div className=' flex  flex-col justify-center items-center '>
        <img className=' mt-7' src={success}/>
     <h1 className=' font-bold text-lg shadow-sm mt-2 text-green-500' >Payment Successfully</h1>
    <Link to='/order'>
    <button className='mt-2 p-3 border hover:text-white border-green-600 hover:bg-green-600 transition-all rounded-md font-bold'>See Order</button>
    </Link>
    </div>
</div>
  )
}

export default Success
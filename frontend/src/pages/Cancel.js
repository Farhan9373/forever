import React from 'react'
import cancel from '../assest/cancel.gif.gif'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className=' container mx-auto px-4'>
        <div className=' flex  flex-col justify-center items-center '>
            <img className=' w-60' src={cancel}/>
         <h1 className=' text-red-700 font-bold text-lg shadow-sm' >Payment Cancelled</h1>
        <Link to='/cart'>
        <button className=' p-3 border border-red-500 rounded-md mt-3 hover:bg-red-600 font-bold'>Go to Cart</button>
        </Link>
        </div>

    </div>
  )
}

export default Cancel
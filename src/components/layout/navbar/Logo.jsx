import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='px-5'>
        <Link to='/'>
        <span className='font-semibold text-white'>Pothik Ahammed</span>
        <span className='text-orange-500 text-[15px] font-bold'>.</span>
        </Link>
    </div>
  )
}

export default Logo
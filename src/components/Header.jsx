import React from 'react'
import logo from '../images/logo.svg'
const Header = () => {
  return (
    <div className='flex items-center justify-center text-center py-6'>
       <div className='mx-6 space-y-6'>
       <div className='flex justify-center items-center mb-10'>
        <img src={logo} alt="" />
       </div>
       <h2 className='font-bold my-4 text-3xl'>A history of everything you copy</h2>
       <p className='md:max-w-[638px] text-gray-500'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all devices.</p>
       <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4 justify-center'>
        <button className='py-4 px-6 bg-green-400 rounded-full font-bold text-white duration-200 transition hover:-translate-y-0.5 hover:shadow-lg'>Download for iOS</button>
        <button className='py-4 px-6 bg-blue-400 rounded-full font-bold text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200'>Download for Mac</button>
       </div>
       </div>

    </div>
  )
}

export default Header
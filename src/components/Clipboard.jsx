import React from 'react'
import logo from '../images/logo.svg'
const Clipboard = () => {
  return (
    <div className='flex items-center justify-center text-center py-6'>
       <div className='mx-6 space-y-6'>
       <h2 className='font-bold my-4 text-3xl text-DarkGrayishBlue'>Clipbord for iOS and Mac OS</h2>
       <p className='md:max-w-[638px] text-gray-500'>Available for free on the App Store.Download for mac or iOS, sync with icloud and your are ready to start adding to your clipboard. </p>
       <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4 justify-center'>
        <button className='py-4 px-6 bg-strongcyan hover:opacity-80 rounded-full font-bold text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200'>Download for iOS</button>
        <button className='py-4 px-6 bg-LightBlue rounded-full font-bold text-white hover:-translate-y-0.5 hover:shadow-lg transition duration-200 hover:opacity-80'>Download for Mac</button>
       </div>
       </div>

    </div>
  )
}

export default Clipboard
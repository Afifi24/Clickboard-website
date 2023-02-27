import React from 'react'
import img2 from '../images/image-devices.png'
const Main = () => {
  return (
    <div className='flex items-center flex-col justify-center my-8 mx-6'>

        <div className='text-center'>
            <h2 className='font-bold text-3xl my-6 text-DarkGrayishBlue'>Access Clipboard Anywhere</h2>
            <p className='md:max-w-lg text-gray-500'>Whether you are on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        </div>
        <img className='md:max-w-xl my-12' src={img2} alt="" />
    </div>
  )
}

export default Main
import React from 'react'
import list from '../images/icon-blacklist.svg'
import text from '../images/icon-text.svg'
import preview from '../images/icon-preview.svg'
import google from '../images/logo-google.png'
import imb from '../images/logo-ibm.png'
import microsoft from '../images/logo-microsoft.png'
import hp from '../images/logo-hp.png'
import victor from '../images/logo-vector-graphics.png'

const Workflow = () => {
  return (
    <div className='flex flex-col items.center text-center mb-8 justify-center gap-4 space-y-28 mt-20 mx-6'>
      <div className='flex items-center flex-col '>
        <h2 className='text-3xl font-bold my-3 text-DarkGrayishBlue'>Supercharge your workflow</h2>
        <p className='text-gray-500 md:max-w-sm'>We have got the tools to boost your productivity.</p>
      </div>
      <div className='space-y-12 md:space-y-0 md:grid md:grid-cols-3  md:place-items-center md:mx-28 md:items-center md:justify-center mb-10'>
      <div className='flex items-center flex-col '>  
        <img src={list} alt="" />
        <h2 className='text-2xl font-bold my-3 text-DarkGrayishBlue'>Create blackists</h2>
        <p className='text-gray-500 md:max-w-xs'>ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
      </div>
      <div className='flex items-center flex-col md:mx-auto '>  
        <img src={text} alt="" />
        <h2 className='text-2xl font-bold my-3 text-DarkGrayishBlue'>Plain text snippets</h2>
        <p className='text-gray-500 md:max-w-xs'>remove unwanted formatting from copied text for a consistant look.</p>
      </div>
      <div className='flex items-center flex-col '>  
        <img src={preview} alt="" />
        <h2 className='text-2xl font-bold my-3 text-DarkGrayishBlue'>sneak preview</h2>
        <p className='text-gray-500 md:max-w-xs'>quick preview of all snippets on your clipboard for easy access.</p>
      </div>
      </div>
      <div className='flex flex-col justify-center text-center space-y-10 gap-0 md:flex-row md:space-y-0 md:space-x-4 mt-10 md:gap-6'>
        <div className='flex justify-center text-center'>
          <img className='md:' src={google} alt="" />
        </div>
        <div className='flex justify-center text-center'>
          <img className='md:' src={imb} alt="" />
        </div>
        <div className='flex justify-center text-center'>
          <img className='' src={microsoft} alt="" />
        </div>
        <div className='flex justify-center text-center'>
          <img className='md:' src={hp} alt="" />
        </div>
        <div className='flex justify-center text-center'>
          <img className='md:' src={victor} alt="" />
        </div>
      </div>
    
    </div>
  )
}

export default Workflow
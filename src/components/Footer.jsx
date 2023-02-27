import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twetter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import logo from '../images/logo.svg'
const Footer = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center gap-8 mt-20 py-10 md:flex-row px-32 bg-gray-50'>
      <div className='md:flex-1'>
        <img className='w-[60px]' src={logo} alt="" />
      </div>
      <ul className='flex flex-col gap-4 cursor-pointer md:flex-row md:flex-wrap md:flex-1 md:space-x-0 md:gap-6  md:justify-start md:items-start'>
        <li>FAQs</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Press Kit </li>
        <li>Install Guide</li>
      </ul>
       <div className='flex items-center justify-center gap-4 md:flex-1'>
         <img src={facebook} alt="" />
         <img src={twetter} alt="" />
         <img src={instagram} alt="" />
       </div>

    </div>
  )
}

export default Footer
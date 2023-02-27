import React from 'react'
import img1 from '../images/image-computer.png'
const Hero = () => {
  return (
    <div className='flex items-center justify-center text-center mt-14'>
      <div className=''> 
        <div className='space-y-4 mx-6 flex items-center justify-center flex-col  '>
        <h2 className='text-3xl font-bold mx-10'>Keep track of your snippets</h2>
        <p className='text-gray-600 md:max-w-[664px]'>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>
        <div className='my-8 mt-16 space-y-4 md:flex md:items-center gap-20 mx-6 md:mr-6'>
            <div>
                <img className='md:-ml-72 mb-6 md:mb-0 md:max-w-xl' src={img1} alt="" />
            </div>
            <div className='space-y-8 mt-10 md:mt-0'>
                <div className=''>
                    <h2 className='font-bold text-3xl mb-4 md:text-left'>Quick Search </h2>
                    <p className='text-gray-600 md:max-w-sm md:text-left'>Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mb-4 md:text-left'>iCloud Sync  </h2>
                    <p className='text-gray-600 md:max-w-sm md:text-left'>Instantly saves and syncs snippets across all your devices.</p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mb-4 md:text-left'>Complete History </h2>
                    <p className='text-gray-600 md:max-w-sm md:text-left'>Restrieve any snippets from the first moments you started using the app.</p>
                </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
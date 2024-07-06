import React from 'react'
import Main_Image from '../assets/landing-splash.jpg'
import LoginButton from './LoginButton'

function Hero() {
  return (
    <>
        <div className='h-[calc(100vh-4rem)] flex items-center'>
        <div className='flex flex-col gap-8 p-16 md:gap-12 md:w-1/2'>
            <h1 className='text-3xl leading-tight md:text-5xl lg:text-6xl'>Easy and secure access to your content</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-zinc-500'>Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 w-32 h-12 mr-2 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white">Log In</button>
        </div>
        <img className='hidden w-1/2 md:inline-block' src={Main_Image} alt='Image'/>
        </div>
        <LoginButton/>
    </>
  )
}

export default Hero

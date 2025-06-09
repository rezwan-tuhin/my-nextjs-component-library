'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'


const VideoBackground = ({children}) => {
    
  return (
    <div className='relative w-screen h-screen'>
        <video preload='auto' autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover -z-10'>
            <source src='/video/bg.mp4' type='video/mp4' />
        </video>
        <section className='flex flex-col h-screen'>
          {children}
           <div className='flex justify-center items-center flex-1'>
           <div className='flex flex-col items-center'>
           <h2 className='font-sour text-center text-shadow-xs text-shadow-amber-300 text-white text-[clamp(16px,_7vw,_96px)]'>Continue your Journey!</h2> 
           <p className='font-sour text-center text-white text-[clamp(11px,_2vw,_32px)] px-4 md:px-0'>This is my practice book of Nextjs components. You also can explore with me</p>
           <Link href='#' className='mt-4 text-[clamp(16px,_2vw,_24px)] border-2 border-white transition-all duration-600 text-white bg-black px-6 py-1 rounded-full animate-bounce-slow hover:animate-none '>GitHub</Link>
           </div>
           </div>
        </section>
    </div>
  )
}

export default VideoBackground;
'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'


const VideoBackground = ({children}) => {
    
  return (
    <div className='relative w-screen h-screen'>
        <video preload='auto' autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover -z-10'>
            <source src='/video/bg.mp4' type='video/mp4' />
        </video>
        {children}
    </div>
  )
}

export default VideoBackground;
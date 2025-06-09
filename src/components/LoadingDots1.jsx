import React from 'react'
import { tv } from 'tailwind-variants'

const loadingDots1 = tv({
  base: 'w-4 h-4 bg-indigo-500 rounded-full'
})

const LoadingDots1 = ({className}) => {
  return (
    <div className='flex justify-center items-center space-x-1'>
        <div style={{animationDelay: '0s'}} className={`animate-pulse ${loadingDots1({className})}`}></div>
        <div style={{animationDelay: '0.4s'}} className= {`animate-pulse ${loadingDots1({className})}`}></div>
        <div style={{animationDelay: '0.8s'}} className={`animate-pulse ${loadingDots1({className})}`}></div>
    </div>
  )
}

export default LoadingDots1
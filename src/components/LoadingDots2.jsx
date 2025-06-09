import React from 'react'
import { tv } from 'tailwind-variants'

const loadingDots2 = tv({
    base: 'w-3 h-3 rounded-full bg-indigo-500'
})

const LoadingDots2 = ({className}) => {
  return (
    <div className='flex space-x-2'>
        <div className={`animate-bounce-first-dot ${loadingDots2({className})}`}></div>
        <div className={`animate-bounce-second-dot ${loadingDots2({className})}`}></div>
        <div className={`animate-bounce-third-dot ${loadingDots2({className})}`}></div>
        </div>
  )
}

export default LoadingDots2
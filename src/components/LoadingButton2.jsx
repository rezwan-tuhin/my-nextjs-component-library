import React from 'react'
import { tv } from 'tailwind-variants';

const loadingButton2 = tv({
  base: "bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 font-bold cursor-no-drop"
})

const LoadingButton2 = ({children, className}) => {
  return (
    <button
          className= {loadingButton2({className})}
          disabled
        >
          <div className="loader ease-linear w-5 h-5 rounded-full border-4 border-t-4 border-[currentColor]/25 animate-spin border-t-[currentColor]/75"></div>
          <div>{children}</div>
        </button>
  )
}

export default LoadingButton2
import React from 'react'
import { tv } from 'tailwind-variants'

const CircularLoader = () => {
  return (
    <div className="ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 animate-spin border-t-blue-500"></div>
  )
}

export default CircularLoader
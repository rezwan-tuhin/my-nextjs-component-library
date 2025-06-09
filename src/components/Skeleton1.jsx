import React from 'react'
import { tv } from 'tailwind-variants'

/*
this component use 'animate-shimmer' class.
animate-shimmer class is defined in global.css
with it's necessary keyframe
keyframe name is shimmer
*/ 

const skeleton1 = tv({
    base: 'relative overflow-hidden bg-[hsl(220_24%_96%)] mb-2 h-4 w-full rounded-md'
})

const Skeleton1 = ({className}) => {

  return (
    <div className={skeleton1({className})}>
        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer translate-x-[-100%]"></div>
    </div>
  )
}

export default Skeleton1
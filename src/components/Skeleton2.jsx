import React from 'react'
import { tv } from 'tailwind-variants'

/*
this component use 'animate-shimmer' class.
animate-shimmer class is defined in global.css
with it's necessary keyframe
keyframe name is shimmer
*/ 

/* also this component use a raw css class .skeleton
which is also defined in global.css
*/

const skeleton2 = tv({
  base: 'h-4 w-full mb-2 bg-[hsl(220_14%_96%)] rounded-md'
})

const Skeleton2 = ({className}) => {
  return (
    <div className={`skeleton ${skeleton2({className})}`}></div>

  )
}

export default Skeleton2;
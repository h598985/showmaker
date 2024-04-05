import React from 'react'

// eslint-disable-next-line react/prop-types
export function Title({title}: {title: string}) {

  return (

    <div className='w-full font-bold p-2 bg-gray-300 text-nowrap mt-1 h-10 truncate'>
        {title}
        </div>
  )
}

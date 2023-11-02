import React from 'react'
import Tweet from './Tweet'

function Timeline() {
  return (
    <div className='text-gray-50 mt-3 pb-1 space-y-2'>
        <Tweet/>
        <Tweet/>
        <Tweet/>
    </div>
  )
}

export default Timeline
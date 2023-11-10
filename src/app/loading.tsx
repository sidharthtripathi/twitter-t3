import React from 'react'
import "./loader.css"
function loading() {
  return (
    <div className='h-screen w-screen fixed z-10 flex justify-center items-center text-bold text-3xl bg-black opacity-90'>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}

export default loading
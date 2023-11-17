import React, { useState } from 'react'

const SideMenuBar = () => {
  const [show, setshow] = useState(false)
  const showMenu =()=>{
setshow(!show)
    
  }

  return (
    <>
    <div className=' absolute '>
      <ul className=' fixed z-1000 gap-4 pt-10 pl-5 text-2xl h-screen bg-opacity-75  font-bold text-white bg-black  flex flex-col right-0 top-0  w-[60%]'>
        <li onClick={showMenu} >X</li>
        <li>Home</li>
        <li>Gpt Search</li>
        <li>Sign Out</li>
      </ul>
    </div>

      
        
    </>

  )
}

export default SideMenuBar
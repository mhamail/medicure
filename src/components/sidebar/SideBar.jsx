import React from 'react'

const SideBar = ({ children }) => {
  return (
    <div className='w-full box-border flex flex-1'>
      <div className={'w-16 h-screen text-gray border border-l shadow-xl fixed '}>
      </div>
      <main className={`w-full ml-16`}>
        {children}
      </main>
    </div>

  )
}

export default SideBar
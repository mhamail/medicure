import React from 'react'

const ScreenWidth = ({ children }) => {
    return (
        <div className='md:max-w-[85%] mx-auto px-4'>
            {children}
        </div>
    )
}

export default ScreenWidth
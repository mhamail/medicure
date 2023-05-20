
import React from 'react'
import Link from 'next/link'


const Menu = ({ title, link, Icon }) => {
    return (
        <div className='flex flex-col items-center text-gray-500 hover:text-gray-800 cursor-pointer'>
            {<Icon />}
            <Link href={link || "#"} className='text-sm transition duration-300'>
                {title}
            </Link>
        </div>
    )
}

export default Menu
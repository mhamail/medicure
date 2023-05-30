
import React from 'react'
import Href from '@/utils/theme/linkHref/Href'


const Menu = ({ title, link, Icon }) => {
    return (
        <div className='flex flex-col items-center text-gray-500 hover:text-gray-800 cursor-pointer'>
            {<Icon />}
            <Href to={link || "#"} className='text-sm transition duration-300'>
                {title}
            </Href>
        </div>
    )
}

export default Menu
import React from 'react'
import Image from 'next/image'
import CustomDropdown from '../customDropdown/CustomDropdown'

const LearnCard = ({ image, title }) => {
    return (
        <div className='flex flex-col space-y-10 max-w-sm'>
            <Image
                src={image}
                alt='Connect with people who can help'
                height={300}
                width={300}
            />
            <h1 className='md:text-4xl text-3xl font-extralight'>
                {title}
            </h1>

            <CustomDropdown />
        </div>
    )
}

export default LearnCard
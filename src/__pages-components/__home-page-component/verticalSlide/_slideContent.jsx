import React from 'react'
import Image from 'next/image';

const _slideContent = ({ data }) => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between md:space-x-20 items-center'
        >
            <div className='w-full md:w-1/2'>
                <h1 className='text-[#8F5849] md:text-4xl text-xl text-center md:test-start font-semibold'>
                    {data.title}
                </h1>
                <p className='md:text-2xl text-lg font-extralight mt-4 text-center md:test-start'>
                    {data.description}
                </p>
            </div>
            <div className='mb-6 md:mb-0 w-full md:w-1/2'>
                <Image src={data.image}
                    alt=" Let the right people know you’re open to work"
                    height={450}
                    width={450}
className='object-cover'
                />
            </div>
        </div>
    )
}

export default _slideContent
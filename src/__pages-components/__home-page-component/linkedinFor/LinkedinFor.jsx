import React from 'react'
import Image from 'next/image'
import ForwardButton from '@/components/ForwardButton/ForwardButton'

const LinkedinFor = () => {

    let leftSide = () => (
        <div className='md:pl-28 p-10 flex flex-col items-center'>
            <div className='space-y-6 '>
                <h1 className='text-[#B24020] md:text-4xl text-3xl font-semibold'>
                    Who is LinkedIn for?
                </h1>
                <p className='md:text-4xl text-2xl font-extralight'>
                    Anyone looking to navigate their professional life.
                </p>
                <div className='mt-2 space-y-4 max-w-sm'>
                    <ForwardButton text="Find a coworker or classmate" />
                    <ForwardButton text="Find a new job" />
                    <ForwardButton text="Find a course or training" />
                </div>
            </div>
        </div>
    )
    let rightSide = () => (
        <Image
            src={"/linkedinfor.jpeg"}
            alt="Welcome to your professional community"
            height={700}
            width={700}
            className='w-7/12 mx-auto md:w-full object-cover md:scale-110'
        />
    )

    return (
        <div className='py-20 overflow-hidden'>
            <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start md:space-y-20 '>
                <div className='md:mt-20 bg-[#F3F2F0] max-w-full md:w-[50%] md:py-20 '>
                    {leftSide()}
                </div>
                <div className='max-w-full md:w-[49%] md:-mr-40 md:mt-20'>
                    {rightSide()}
                </div>
            </div>
        </div>
    )
}

export default LinkedinFor
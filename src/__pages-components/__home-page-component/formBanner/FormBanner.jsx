import React from 'react'
import Image from 'next/image'
//utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
// component
import HomeSignin from '@/components/homeSignin/HomeSignin'

const FormBanner = () => {
    return (
        <div className='overflow-hidden min-h-screen '>
            <ScreenWidth>
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-20 '>
                    <div className='max-w-full md:w-[40%]'>
                        <div className='space-y-6'>
                            <h1 className='md:text-5xl text-4xl font-extralight text-gray-400 tracking-wide md:leading-[70px!important]'>
                                Welcome to your professional community
                            </h1>
                            <HomeSignin />
                        </div>
                    </div>
                    <div className='max-w-full md:w-[49%] md:-mr-40 md:mt-20'>
                        <Image
                            src={"/formBanner.svg"}
                            alt="Welcome to your professional community"
                            height={700}
                            width={700}
                            className='md:mt-20 w-7/12 mx-auto md:w-full object-cover md:scale-125'
                        />
                    </div>
                </div>
            </ScreenWidth>
        </div>
    )
}

export default FormBanner
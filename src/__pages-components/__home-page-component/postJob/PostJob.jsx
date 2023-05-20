import React from 'react'
import Link from 'next/link'
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
import { ButtonUnfilled } from '@/utils/theme/buttons/Buttons'

const PostJob = () => {
    return (
        <div className='py-20 bg-[#F1ECE5]'>
            <ScreenWidth>
                <div className='flex flex-col md:flex-row space-x-10 md:items-center'>
                    <div className='max-w-sm'>
                        <h1 className='text-[#B24020] md:text-4xl text-3xl'>
                            Post your job for millions of people to see
                        </h1>
                    </div>
                    <Link href="#" className='mt-4 md:mt-0'>
                        <ButtonUnfilled text="Post a job" />
                    </Link>
                </div>
            </ScreenWidth>
        </div>
    )
}

export default PostJob
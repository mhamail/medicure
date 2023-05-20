import React, { useState } from 'react'
import Link from 'next/link'
//utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
import { TagButton } from '@/utils/theme/buttons/Buttons'
//
import { tagList } from './taglist'
// components
import ShowMore from '@/components/showLessMoreBtn/ShowMore';

const JobTags = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='py-20 bg-hovering'>
            <ScreenWidth>
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start '>
                    <div className='w-full md:w-[40%]'>
                        <h1 className='text-3xl md:text-5xl font-extralight tracking-wide md:leading-[70px!important]'>
                            Find the right job or internship for you
                        </h1>
                    </div>
                    <div className='w-full md:w-[55%] space-y-4 mt-4 md:mt-0'>
                        <h4 className='uppercase text-gray-800'>
                            SUGGESTED SEARCHES
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                            {tagList.slice(0, toggle ? tagList.length : 10).map((tag, i) => (
                                <Link href={tag.link} key={i}>
                                    <TagButton text={tag.name} full />
                                </Link>
                            ))}
                        </div>
                        <ShowMore setToggle={setToggle} toggle={toggle} />
                    </div>
                </div>
            </ScreenWidth>
        </div>
    )
}

export default JobTags
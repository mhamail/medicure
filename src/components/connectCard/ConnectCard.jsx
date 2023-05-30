import React from 'react'
import Image from 'next/image'
//utils
import Href from '@/utils/theme/linkHref/Href'
import { TagButton } from '../buttons/Buttons'

const ConnectCard = ({ image,title, btnText, link }) => {
    return (
        <div className='flex flex-col space-y-10 max-w-sm'>
            <Image
                src={image}
                alt={title}
                height={300}
                width={300}
            />
            <h1 className='md:text-4xl text-3xl font-extralight'>
                {title}
            </h1>
            <Href to={"#" || link}>
                <TagButton text={btnText} />
            </Href>
        </div>
    )
}

export default ConnectCard
import React, { useState } from 'react'
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
//
import { dataSlide } from './data';
import _slideContent from './_slideContent';

const VerticalSlide = () => {
    const [startIndex, setStartIndex] = useState(0);
    const handleClick = (number) => {
        if (startIndex === (dataSlide.length - 1) && number === 1) {
        }
        else {
            setStartIndex(startIndex + (number))
        }
    }
    const chevBtn = (Chevron, number) => (
        <div className='inline-block p-2 rounded-full bg-gray-700 hover:bg-gray-900 cursor-pointer'>
            <Chevron className='text-white' onClick={() => handleClick(number)} />
        </div>
    )
    const leftChev = () => (
        startIndex > 0 &&
        chevBtn(ChevronLeft, -1)
    )
    const rightChev = () => (
        startIndex < 2 &&
        chevBtn(ChevronRight, 1)
    )
    return (
        <div className='md:h-screen py-20 md:py-0 flex items-center bg-hovering'>
            <ScreenWidth>
                <div className="flex items-center space-x-4">
                    {leftChev()}
                    {/* map content */}
                    {dataSlide.slice(startIndex, startIndex + 1).map((data, i) => (
                        <_slideContent data={data} key={i} />
                    ))}
                    {/* end */}
                    {rightChev()}
                </div>
            </ScreenWidth>
        </div>
    )
}

export default VerticalSlide
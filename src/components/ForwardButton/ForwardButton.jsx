import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ForwardButton = ({text}) => {
  return (
   <div className='p-4 flex justify-between bg-[#e4e0db] hover:bg-[#e1dad0] cursor-pointer'>
            <h4 className='text-xl'>
                {text}
            </h4>
            <ArrowForwardIosIcon />
        </div>
  )
}

export default ForwardButton
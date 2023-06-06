import React from 'react'
import { Message } from '@mui/icons-material';
import { Boxes } from 'lucide-react';
//component
import AccountDropdown from '@/components/accountDropdown/AccountDropdown';

const LeftHeader = () => {
    return (
        <div className='flex justify-between items-center w-full '>
          <Boxes className='md:hidden block'/>
            <div className='hidden  w-12 h-12 md:flex justify-center items-center bg-gray-600 text-white rounded-sm'>
                <Message />
            </div>
            <div>
                <AccountDropdown />
            </div>
        </div>
    )
}

export default LeftHeader
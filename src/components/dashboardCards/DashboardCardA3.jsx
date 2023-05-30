import React from 'react'
//icon
import { MoreHorizontal, Replace } from 'lucide-react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
//component
import BgIcon from '@/components/bgIcon/BgIcon';

const DashboardCard3 = ({ active, resolved, pending }) => {
  return (
    <div className='bg-[#FCF3E1] p-6 space-y-6 rounded-lg col-span-4'>
      <div className='flex justify-between items-center'>
        <BgIcon className={"bg-[#82B39A]"}
          icon={<Replace className='text-white fill-neutral-100' />}
        />
        <MoreHorizontal />
      </div>
        <div className='flex space-x-6 '>
          <h1 className='font-bold text-3xl'>
            36
            </h1>
          <h4 className='font-semibold w-2/3'>
            New Task Added This Week
          </h4>
        </div>
        <div className='flex text-yellow-600'>
           <ArrowDropUpIcon/>
           &nbsp;&nbsp;
           3.4%
           &nbsp;&nbsp;
           <span className='text-gray-400'>
             vs last month
            </span>
        </div>
    </div>
  )
}

export default DashboardCard3
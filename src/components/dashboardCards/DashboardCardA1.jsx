import React from 'react'
//icon
import { MoreHorizontal } from 'lucide-react';
//component
import BgIcon from '@/components/bgIcon/BgIcon';

const DashboardCard1 = ({ active, resolved, pending }) => {
  return (
    <div className='bg-[#82B39A] p-6 space-y-12 rounded-lg col-span-4'>
      <div className='flex justify-between items-center'>
        <BgIcon
          icon={<div className='h-4 w-4 rounded-full bg-white'></div>}
        />
        <MoreHorizontal className='text-white' />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center space-y-2 text-white'>
          <p>Active</p>
          <h4 className='font-bold'>{active}</h4>
        </div>
        <div className='flex flex-col space-y-2 items-center text-white'>
          <p>Resolved</p>
          <h4 className='font-bold'>{resolved}</h4>
        </div>
        <div className='flex flex-col space-y-2 items-center text-white'>
          <p>Pending</p>
          <h4 className='font-bold'>{pending}</h4>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard1
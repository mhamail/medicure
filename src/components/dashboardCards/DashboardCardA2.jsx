import React from 'react'
//icon
import { MoreHorizontal, Moon } from 'lucide-react';
//component
import BgIcon from '@/components/bgIcon/BgIcon';

const DashboardCard2 = ({ active, resolved, pending }) => {
  return (
    <div className='bg-[#FCF2EF] p-6 space-y-12 rounded-lg col-span-4'>
      <div className='flex justify-between items-center'>
        <BgIcon className={"bg-gray-900"}
          icon={<Moon className='text-white fill-neutral-100' />}
        />
        <MoreHorizontal />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col '>
          <p className='text-yellow-500 font-semibold'>Design</p>
          <h4 className='font-semibold w-2/3'>
            Create Night Mode For Sleep App
          </h4>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-6 h-6 rounded-full'>
            <img src="https://i.pravatar.cc/100?img=4" className='object-cover rounded-full' />
          </div>
          <div className='w-6 h-6 rounded-full -mt-2'>
            <img src="https://i.pravatar.cc/100?img=5" className='object-cover rounded-full' />
          </div>
          <div className='w-6 h-6 rounded-full -mt-2'>
            <img src="https://i.pravatar.cc/100?img=6" className='object-cover rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard2
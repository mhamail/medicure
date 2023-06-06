import React from 'react'
import { MoreVertical } from 'lucide-react'


const DashboardCardB3 = ({className}) => {

    return (
        <div className={`shadow-sm p-3 flex flex-col justify-between space-y-6 ${className}`}>
            <div className='flex justify-between'>
                    <h2 className='font-bold'>
                       Quick Stats
                    </h2>
                <MoreVertical className='text-gray-700 ' />
            </div>
            <div className='flex justify-between'>
                <div className='bg-stone-100 p-4 py-6   text-center rounded-md'>
                    <h1 className='text-[#82B39A] font-bold text-4xl'>
                        19
                    </h1>
                    <p>Active Tasks</p>
                </div>
                <div className='bg-stone-100 p-4 py-6  text-center rounded-md'>
                    <h1 className='text-orange-500 font-bold text-4xl'>
                        19
                    </h1>
                    <p>Pending Tasks</p>
                </div>
            </div>
            <div className='bg-stone-100 p-4 flex items-center'>
                <div className='flex space-x-8'>
                    <div className='p-2 bg-[#82B39A] rounded-lg'>
                        <img src={"https://t.ly/AYX1"} className='object-fit w-16'/>
                    </div>
                    <div className='text-justify'>
                        <h2 className='font-bold text-yellow-600'>22 Projects</h2>
                        <p className='text-gray-400'>Completed This Year</p>
                        <h2 className='font-bold cursor-pointer'>View Details</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCardB3
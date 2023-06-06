import React from 'react'
import { MoreVertical } from 'lucide-react'
import MeterChart from '@/components/charts/MeterChart'

const GuageChartdiv = () => {
  return (
    <div className='space-y-5 px-6 md:px-0'>
        <div className='flex justify-between'>
                <h1 className='font-bold md:text-xl text-lg'>
                    Performance Stats
                </h1>
                <MoreVertical className='text-gray-700' />
            </div>
            <MeterChart/>
    </div>
  )
}

export default GuageChartdiv
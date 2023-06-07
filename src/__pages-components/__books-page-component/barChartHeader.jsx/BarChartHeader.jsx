import React from 'react'
import BarChart2 from '@/components/charts/BarChart2'

const BarChartHeader = () => {
  return (
    <div className='flex items-center bg-gray-300 py-10 px-2 h-48'>
      <div className='w-full mx-auto'>
        <BarChart2 />
      </div>
    </div>
  )
}

export default BarChartHeader
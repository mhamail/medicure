import React from 'react'
import LineChart from '@/components/charts/LineChart'

const LineChartDiv = () => {
    return (
        <div className='space-y-5 px-6 md:px-0'>
            <h1 className='font-bold md:text-xl text-lg'>
                Your Performance
            </h1>
            <LineChart />
        </div>
    )
}

export default LineChartDiv
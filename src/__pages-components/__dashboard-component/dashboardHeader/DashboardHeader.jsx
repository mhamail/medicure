import React from 'react'
// component
import Searchbar from '@/components/searchbar/Searchbar';

const DashboardHeader = () => {
  return (
    <div className=' border-b-2 pb-8'>
    <div className='flex justify-between items-center md:px-16 px-6'>
      <h1 className='font-semibold text-gray-800 md:text-2xl text-xl'>
        Good Evening Shakir
      </h1>
      <Searchbar className={"w-56"} text="search here" />
    </div>
  </div>
  )
}

export default DashboardHeader
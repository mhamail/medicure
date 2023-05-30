import React, { useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

// components
import SideBar from '@/components/sidebar/SideBar';
import Searchbar from '@/components/searchbar/Searchbar';
// Card A
import DashboardCard1 from '@/components/dashboardCards/DashboardCardA1';
import DashboardCard2 from '@/components/dashboardCards/DashboardCardA2';
import DashboardCard3 from '@/components/dashboardCards/DashboardCardA3';
// Card B
import DashboardCardB1 from '@/components/dashboardCards/DashboardCardB1';
import DashboardCardB2 from '@/components/dashboardCards/DashboardCardB2';
import DashboardCardB3 from '@/components/dashboardCards/DashboardCardB3';

const Dashboard = () => {
  const dashboardHeader = () => (
    <div className=' border-b-2 pb-8'>
      <div className='flex justify-between items-center px-16'>
        <h1 className='font-semibold text-gray-800 text-2xl'>Good Evening Shakir</h1>
        <Searchbar className={"w-72"} text="search here" />
      </div>
    </div>
  )
  const dashboardCardA = () => (
    <div className='px-16 py-8'>
    <div className='grid grid-cols-12 gap-x-6 justify-between'>
      <DashboardCard1 active={"29"} resolved={"144"} pending={"14"} />
      <DashboardCard2 />
      <DashboardCard3 />
    </div>
  </div>
  )
  const dashboardCardB=()=>(
    <div className='px-16 py-8'>
    <div className='grid grid-cols-12 gap-x-6 justify-between'>
     <DashboardCardB1/>
     <DashboardCardB2/>
     <DashboardCardB3/>
    </div>
  </div>
  )
  return (
    <div>
      <SideBar>
        <div className='grid grid-cols-12  '>
          <div className='col-span-9 py-4 min-h-screen border-r-2 '>
            {dashboardHeader()}
            {dashboardCardA()}
            {dashboardCardB()}

          </div>
          <div className='col-span-3 px-16'>s</div>
        </div>
      </SideBar>
    </div>
  );
};

export default Dashboard;

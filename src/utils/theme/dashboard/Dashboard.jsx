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
      <div className='flex justify-between items-center md:px-16 px-6'>
        <h1 className='font-semibold text-gray-800 md:text-2xl text-xl'>
          Good Evening Shakir
        </h1>
        <Searchbar className={"w-56"} text="search here" />
      </div>
    </div>
  )
  const dashboardCardA = () => (
    <div className='md:px-16 px-8 py-8'>
      <div className='grid grid-cols-12  gap-6 justify-between'>
        <DashboardCard1 active={"29"} resolved={"144"} pending={"14"}
          className={"md:col-span-4 col-span-12 "}
        />
        <DashboardCard2
          className={"md:col-span-4 col-span-12"}
        />
        <DashboardCard3
          className={"md:col-span-4 col-span-12"}
        />
      </div>
    </div>
  )
  const dashboardCardB = () => (
    <div className='md:px-16 px-8 py-8'>
      <div className='grid grid-cols-12 gap-6 justify-between'>
        <DashboardCardB1
          className={"md:col-span-4 col-span-12"}
        />
        <DashboardCardB2
          className={"md:col-span-4 col-span-12"}
        />
        <DashboardCardB3
          className={"md:col-span-4 col-span-12"}
        />
      </div>
    </div>
  )
  return (
    <div>
      <SideBar>
        <div className='grid grid-cols-12  '>
          <div className='md:col-span-9 col-span-12 py-4 min-h-screen md:border-r-2 '>
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

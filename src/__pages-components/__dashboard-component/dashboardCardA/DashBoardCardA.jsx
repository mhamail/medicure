import React from 'react'
// Card A
import DashboardCard1 from '@/components/dashboardCards/DashboardCardA1';
import DashboardCard2 from '@/components/dashboardCards/DashboardCardA2';
import DashboardCard3 from '@/components/dashboardCards/DashboardCardA3';

const DashBoardCardA = () => {
  return (
    <div className='md:px-16 px-8'>
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
}

export default DashBoardCardA
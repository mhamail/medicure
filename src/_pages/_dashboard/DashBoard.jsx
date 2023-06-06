import React from 'react';
//pageComponent
import DashboardHeader from '@/__pages-components/__dashboard-component/dashboardHeader/DashboardHeader';
import DashBoardCardA from '@/__pages-components/__dashboard-component/dashboardCardA/DashBoardCardA';
import DashBoardCardB from '@/__pages-components/__dashboard-component/dashBoardCardB/DashBoardCardB';
import LeftHeader from '@/__pages-components/__dashboard-component/leftHeader/LeftHeader';
import GuageChartdiv from '@/__pages-components/__dashboard-component/gaugeChart/GuageChartdiv';
import LineChartDiv from '@/__pages-components/__dashboard-component/lineChart/LineChartDiv';
// components
import SideBar from '@/components/sidebar/SideBar';
import BarChart from '@/components/charts/BarChart';
import BasicContact from '@/components/basicContact.jsx/BasicContact';

const Dashboard = () => {
    return (
        <div>
            <SideBar>
                <div className='grid grid-cols-12  '>
                    <div className='md:col-span-9 col-span-12 py-4 min-h-screen md:border-r-2 space-y-10'>
                        <DashboardHeader />
                        <div className='md:px-12 px-6 w-full' >
                            <div className='h-72'>
                                <BarChart />
                            </div>
                        </div>
                        <DashBoardCardA />
                        <DashBoardCardB />
                    </div>
                    <div className='md:col-span-3 col-span-12 md:px-6 px-4 py-4 md:space-y-14 space-y-10'>
                        <div className='hidden md:block pb-8 '>
                            <LeftHeader />
                        </div>
                        <GuageChartdiv />
                        <LineChartDiv />
                        <div className='p-6 md:p-0'>
                            <BasicContact />
                        </div>
                    </div>
                </div>
            </SideBar>

        </div>
    );
};

export default Dashboard;

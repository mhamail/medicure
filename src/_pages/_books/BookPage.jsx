import React from 'react'
//pages component
import BarChartHeader from '@/__pages-components/__books-page-component/barChartHeader.jsx/BarChartHeader'
//components
import SideBar2 from '@/components/sidebar2/SideBar2'
import ListWordPdf from '@/components/listWordPdf/ListWordPdf'

const BookPage = () => {
    return (
        <SideBar2>
            <div className='relative '>
                <BarChartHeader />
                <div className='h-2 w-full bg-gray-500'></div>
                <ListWordPdf />
            </div>
        </SideBar2>
    )
}

export default BookPage
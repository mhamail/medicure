import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import MultiLevelDropdown from '../multiLevelDropdown/MultiLevelDropdown'

const SideBar2 = ({ children }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const title = () => (
      
        <div className='bg-gray-400 h-48 flex items-center justify-center text-gray-800'>
            <h1 className='text-3xl font-bold text-center px-2'>Medicure Book</h1>
        </div>
    )
    return (
        <div className='w-full box-border flex flex-1'>
            <div className={'hidden md:block w-56 h-screen border border-l shadow-xl fixed bg-gray-600 '}>
                {title()}
                <div className='flex items-start justify-start'>
                    <MultiLevelDropdown />
                </div>
            </div>
            {/* mobile --start*/}
            {openDropdown &&
                <div className='md:hidden relative'>
                    <div className='absolute left-0 w-56 h-screen border border-l shadow-xl bg-gray-600 z-10'>
                        <div className='mt-10'>
                            <MultiLevelDropdown />
                        </div>
                    </div>
                </div>
            }
            {/* mobile --end*/}
            <main className={`w-full md:ml-56`}>
                {/* mobile --start*/}
                <div className='md:hidden relative bg-gray-400 flex justify-center items-center py-4 text-gray-800'>
                    <AlignJustify className='cursor-pointer absolute left-2 z-20'
                        onClick={() => setOpenDropdown(!openDropdown)}
                    />
                    <h1 className='text-3xl font-bold'>Audio Book</h1>
                </div>
                {/* mobile --end*/}
                {children}
            </main>
        </div>
    )
}

export default SideBar2
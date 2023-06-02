import React, { useState } from 'react'
// utils
import Href from '@/utils/theme/linkHref/Href'
// icons
import { Boxes, Power, Menu } from 'lucide-react'
//component
import LucideHoverIcon from '../lucideHoverIcon/LucideHoverIcon'
import GroupStyledIcon from '../groupStyledIcons/GroupStyledIcon'
import LeftHeader from '@/__pages-components/__dashboard-component/leftHeader/LeftHeader'
const SideBar = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full box-border flex flex-1'>
      <div className={'w-16 h-screen text-gray border border-l shadow-xl fixed '}>
        <div className='h-full py-8 flex flex-col justify-between ml-4'>
          <div className='space-y-28'>
            <Menu className='md:hidden block mb-4 cursor-pointer'
              onClick={() => setOpen(!open)}
            />
            <Href to="/">
              <Boxes className="hidden md:block" />
            </Href>
            <GroupStyledIcon />
          </div>
          <div className='text-green'>
            <LucideHoverIcon Icon={Power} color="green" hcolor="red" className='cursor-pointer hover:text-red-500!important' />
          </div>
        </div>
      </div>
      <main className={`w-full ml-16`}>
        {open &&
          <div className='md:hidden block p-8 bg-gray-200'>
            <LeftHeader />
          </div>
        }
        {children}
      </main>
    </div>
  )
}

export default SideBar
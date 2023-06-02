import React from 'react'
import { useRouter } from 'next/router'
// utils
import Href from '@/utils/theme/linkHref/Href'
// icons
import { LayoutDashboard, BarChart, FileText, Flame, Rocket, Settings } from 'lucide-react'

const GroupStyledIcon = () => {
    const router = useRouter();
    router.asPath==="/dashboard"
    const isActive=(path)=>{
      if(router.asPath===path) return true
      else return false
    }
    let iconList = [
      {
        icon: LayoutDashboard,
        link: "/dashboard",
      },
      {
        icon: BarChart,
        link: "#",
      },
      {
        icon: FileText,
        link: "#",
      },
      {
        icon: Flame,
        link: "#",
      },
      {
        icon: Rocket,
        link: "#",
      },
      {
        icon: Settings,
        link: "#",
      },
    ]
  return (
    <div className='space-y-10'>
    
      {iconList.map((item, i) => (
        <div className='group flex justify-between  w-full' key={i}>
          <Href to={item.link}
            className='cursor-pointer hover:opacity-80'
          >
            <item.icon color='#8AB8A0' strokeWidth={3} />
          </Href>
          <div className={`border-r-4 border-[#8AB8A0] opacity-0 group-hover:opacity-100 ${isActive(item.link) && "opacity-100"}`}></div>
        </div>
      ))}
    </div>
  )
}

export default GroupStyledIcon
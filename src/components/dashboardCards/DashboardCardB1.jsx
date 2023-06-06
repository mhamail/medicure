import React from 'react'
import { MoreVertical, Paperclip, Plus } from 'lucide-react'
// component
import AvatarList from '../avatarList/AvatarList'
import OfficeTime from '../officeTime/OfficeTime'

const DashboardCardB1 = ({className}) => {

    return (
        <div className={`shadow-sm p-3 flex flex-col justify-between space-y-6 ${className}`}>
            <div className='flex justify-between'>
                <h2 className='font-bold'>
                    Monday Standup
                </h2>
                <MoreVertical className='text-gray-700 ' />
            </div>
            <AvatarList />
            <OfficeTime />
            <div className='pt-4'></div>
            <div className=' p-1 px-2 bg-orange-100 flex text-orange-500 items-center cursor-pointer'>
                <div className='bg-white p-2 rounded-lg'>
                    <Paperclip />
                </div>
                <Plus className='ml-6' strokeWidth={3} />
                <span className='ml-2 text-lg font-semibold'>Invite Member</span>
            </div>
        </div>
    )
}

export default DashboardCardB1
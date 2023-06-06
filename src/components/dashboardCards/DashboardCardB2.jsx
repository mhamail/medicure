import React from 'react'
import { MoreVertical } from 'lucide-react'


const DashboardCardB2 = ({className}) => {
    const handleSelect = (e) => {
        console.log(e.target.value)
    }
    const selectCard1 = () => (
        <div className="shadow-md rounded-md p-2 py-4 space-y-6 ">
            <div className='flex justify-between'>
                <div className='w-1/2 md:w-auto'>
                    <select className=' text-md font-semibold border-none outline-none '
                        onChange={handleSelect} >
                        <option selected="Profile" disabled hidden>
                            Design User Profile Page
                        </option>
                        <option value={"usman"}>
                            Usman
                        </option>
                    </select>
                </div>
                <h2 className='font-semibold'>81%</h2>
            </div>
            <div className='pt-2'>
                <p className='text-[#82B39A] bg-gray-200 p-1 px-2 rounded-xl inline'>
                    Marketing
                </p>
            </div>
        </div>
    )
    const selectCard2 = () => (
        <div className='shadow-md rounded-md p-2 py-4 space-y-6'>
            <div className='flex justify-between'>
                <div className='w-1/2 md:w-auto'>
                    <select className=' text-md font-semibold border-none outline-none '
                        onChange={handleSelect} >
                        <option selected="Profile" disabled hidden>
                            Design User Profile Page
                        </option>
                        <option value={"usman"}>
                            Usman
                        </option>
                    </select>
                </div>
                <h2 className='font-semibold'>81%</h2>
            </div>
            <div className='flex justify-between pt-2'>
                <p className='text-orange-500 bg-orange-100 p-1 px-2 rounded-xl inline'>
                    Design
                </p>
                <div className='flex items-center'>
                    <div className='w-6 h-6 rounded-full'>
                        <img src="https://i.pravatar.cc/100?img=4" className='object-cover rounded-full' />
                    </div>
                    <div className='w-6 h-6 rounded-full -ml-2'>
                        <img src="https://i.pravatar.cc/100?img=5" className='object-cover rounded-full' />
                    </div>
                    <div className='w-6 h-6 rounded-full -ml-2'>
                        <img src="https://i.pravatar.cc/100?img=6" className='object-cover rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className={`shadow-sm p-3 flex flex-col justify-between space-y-6 ${className}`}>
            <div className='flex justify-between'>
                <div className='flex space-x-4'>
                    <h2 className='font-bold'>
                        In Progress
                    </h2>
                    <div className='border-2 h-6 w-6 flex items-center justify-center rounded-full text-blue-400'>
                        2
                    </div>
                </div>
                <MoreVertical className='text-gray-700 ' />
            </div>
            {selectCard1()}
            {selectCard2()}
        </div>
    )
}

export default DashboardCardB2
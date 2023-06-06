import React from 'react'
import { Compass,Edit2 } from 'lucide-react';
//data and time
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
//component
import BgIcon from '../bgIcon/BgIcon'

const OfficeTime = () => {
    const date = new Date();
    const formattedDate = format(date, "EEEE, dd MMMM");

    const startTime = new Date(date);
    startTime.setHours(8, 0, 0); // Set the start time to 08:00 AM
    const endTime = new Date(date);
    endTime.setHours(11, 0, 0); // Set the end time to 11:00 AM
    const formattedTime = `${format(startTime, "hh:mm a")} - ${format(endTime, "hh:mm a")}`;

    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <BgIcon className={"bg-gray-300"}
                    icon={<div className='bg-white p-2 rounded-lg'>
                        <Compass />
                    </div>}
                />
                <div className='flex flex-col ml-3'>
                    <p className='text-gray-400'>{formattedDate}</p>
                    <h3 className='font-bold'>{formattedTime}</h3>
                </div>
            </div>
            <Edit2 className='text-gray-300 fill-neutral-500' />
        </div>
    )
}

export default OfficeTime
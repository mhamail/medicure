import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Logo1 = ({ sm }) => {
    return (
        <div className='flex space-x-1 items-center cursor-pointer hover:text-highlight text-primary' >
            <div>
                <AcUnitIcon className={`
                ${sm ?
                        "text-2xl" :
                        "text-5xl"} 
                `} />
            </div>
            <div className={`
            ${sm ?
                    "md:text-lg text-md " :
                    "md:text-2xl text-xl"} 
            uppercase font-bold text-heading`}>
                Medicure
            </div>
        </div>
    )
}

export default Logo1
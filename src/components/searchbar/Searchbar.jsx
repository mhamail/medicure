import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = ({ className,text }) => {
    return (
        <div className="relative mt-1 ">
            <div className='h-auto'>
                <input type="text"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-highlight focus:border-highlight block w-56 pl-4 p-2.5 outline-none ${className}`}
                    placeholder={text}
                    onChange={(e)=>{}}
                />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer text-center right-4 pl-3 pointer-events-auto z-20 ">
                <Search className=" w-6 h-6 stroke-current text-gray-500 hover:text-primary " />
            </div>
        </div>
    )
}

export default Searchbar
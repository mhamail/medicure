import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomDropdown = () => {
    const [open, setOpen] = useState(false);
    const divRef = useRef(null);

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const list = [
        {
            title: "Business Anylysis and Strategy",
            sub: "890+ courses",
            link: "#"
        },
        {
            title: "Business Software and Tools",
            sub: "1,970+ courses",
            link: "#"
        },
        {
            title: "Career Development",
            sub: "180+ courses",
            link: "#"
        },
        {
            title: "Customer Service",
            sub: "180+ courses",
            link: "#"
        },
        {
            title: "Finance and Accounting",
            sub: "280+ courses",
            link: "#"
        },
    ]
    return (
        <div>
            <div className={`bg-white p-3 w-full border border-gray-400 hover:border-black hover:bg-gray-100 flex items-center justify-between cursor-pointer select-none`}
                onClick={() => setOpen(!open)}
                ref={divRef}
            >
                Choose a topic to learn about
                <ArrowDropDownIcon />
            </div>
            {open &&
                <ul className='bg-white shadow-lg border'>
                    {list?.map((item) => (
                        <Link href={item.link} key={item.title}>
                            <li className='p-2 text-sm cursor-pointer hover:underline'>
                                <h4 className='font-bold'>
                                    {item.title}
                                </h4>
                                <span className='text-xs'>
                                    {item.sub}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            }
        </div>
    )
}

export default CustomDropdown
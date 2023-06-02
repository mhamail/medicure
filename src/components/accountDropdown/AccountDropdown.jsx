import React, { useState, useEffect, useRef } from 'react'
import { ArrowDropDown } from '@mui/icons-material';
import Href from '@/utils/theme/linkHref/Href';

const AccountDropdown = () => {
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
      title: "Apperance",
      link: "#"
    },
    {
      title: "Signout",
      link: "#"
    },
  ]
  return (
    <div className='relative'>
      <div className={`flex justify-end items-center cursor-pointer select-none`}
        onClick={() => setOpen(!open)}
        ref={divRef}
      >
        <img src="https://i.pravatar.cc/100?img=3" alt="Avatar"
          className="rounded-full w-12 h-12 " />
        <ArrowDropDown />
      </div>
      {open &&
        <ul className='bg-white shadow-lg border absolute right-20 top-0'>
          {list?.map((item) => (
            <Href to={item.link} key={item.title}>
              <li className='p-2 px-6 text-sm cursor-pointer hover:underline hover:bg-gray-100'>
                <h4 className='font-bold'>
                  {item.title}
                </h4>
              </li>
            </Href>
          ))}
        </ul>
      }
    </div>
  )
}

export default AccountDropdown
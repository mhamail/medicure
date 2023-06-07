import React, { useState } from 'react';
import { dispatchFilesHandle } from '../../dispatchMiddleware/book/bookdispatch'
import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Tootip
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const MultiLevelDropdown = () => {
  const [current, setCurrent] = useState([])
  const [catname, setCatname] = useState("all")

  const dispatch = useDispatch()
  // handle function
  const handleDropdown = (index, name) => {
    if (current.includes(index)) {
      setCurrent(current.filter((item) => item !== index));
      //dropdown close all
      // setCurrent(current.filter((item) => !current.includes(index)));
    }
    else {
      setCurrent([...current, index]);
    }
    dispatchFilesHandle(name, dispatch)
    setCatname(name)
  };

  const nameSubstring = (name) => (
    name.length >= 13 ?
      `${name.substring(0, 12)}...`
      : name
  )
  const list = [
    {
      id: "1",
      title: {
        name: "Books 1",
        sub: [
          {
            id: "1a",
            title: {
              name: "Sub Books",
              sub: [
                "Pdf Books",
                "Word Books"
              ]
            },
          },

        ],
      },
    },
    {
      id: "2",
      title: {
        name: "item 2",
        sub: [
          "subItem1",
          "subItem2"
        ]
      }
    },
    {
      id: "3",
      title: {
        name: "item 3",
        sub: [
          "subItem1",
          "subItem2"
        ]
      }
    }
  ]

  const renderDropdownItems = (items) => {
    return (
      <ul className="ml-2">
        {items.map((item, index) =>
          item.title ? (
            <>
              <Tippy content={item.title.name}>
                <li
                  key={index}
                  className="bg-gray-600 px-4 py-2 hover:bg-gray-700 border border-gray-500 cursor-pointer flex"
                  onClick={() => handleDropdown(item.id, item.title.name)}
                >
                  <span>
                    {current.includes(item.id) ?
                      <ChevronUp />
                      : <ChevronDown />
                    }
                  </span>
                  {nameSubstring(item.title.name)}
                </li>
              </Tippy>
              {current.includes(item.id) &&
                item.title.sub && renderDropdownItems(item.title.sub)}
            </>
          ) : (
            <Tippy content={item} key={index}>
              <li
                className="bg-gray-600 px-4 py-2 hover:bg-gray-700 border border-gray-500 cursor-pointer"
                onClick={() => handleDropdown(undefined, item)}
              >
               {nameSubstring(item)}
              </li>
            </Tippy>
          )
        )}
      </ul>
    );
  };
  return (
    <div className=" text-white py-10 px-2 w-full ">
      {list.map((item, i) => (
        <ul key={item.id} >
          <Tippy content={item.title.name}>
            <li className="bg-gray-700 px-4 py-2 hover:bg-gray-800 border border-gray-500 cursor-pointer flex"
              onClick={() => handleDropdown(item.id, item.title.name)}
            >
              <span>
                {!item.title.sub ? "" : current.includes(item.id) ?
                  <ChevronUp />
                  :
                  <ChevronDown />
                }
              </span>
              {nameSubstring(item.title.name)}
            </li>
          </Tippy>
          {current.includes(item.id) && item.title.sub && renderDropdownItems(item.title.sub)}
        </ul>
      ))}

    </div>
  );
};

export default MultiLevelDropdown;
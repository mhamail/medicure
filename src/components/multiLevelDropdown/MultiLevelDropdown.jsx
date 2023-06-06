import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MultiLevelDropdown = () => {
  const [current, setCurrent] = useState([])
  const [catname, setCatname] = useState("all")

  const handleDropdown = (index, name) => {
    if (current.includes(index)) {
      setCurrent(current.filter((item) => item !== index));
      //dropdown close all
      // setCurrent(current.filter((item) => !current.includes(index)));
    }
    else {
      setCurrent([...current, index]);
    }
    setCatname(name)
  };
console.log(catname)
  const list = [
    {
      id: "1",
      title: {
        name: "item 1",
        sub: [
          {
            id: "1a",
            title: {
              name: "sub Item",
              sub: [
                "subItem1",
                "subItem2"
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
                {item.title.name}
              </li>
              {current.includes(item.id) &&
                item.title.sub && renderDropdownItems(item.title.sub)}
            </>
          ) : (
            <li
              key={index}
              className="bg-gray-600 px-4 py-2 hover:bg-gray-700 border border-gray-500 cursor-pointer"
              onClick={() => handleDropdown(undefined, item)}
            >
              {item}
            </li>
          )
        )}
      </ul>
    );
  };
  return (
    <div className=" text-white py-10 px-2 w-full ">
      {list.map((item, i) => (
        <ul key={item.id} >
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
            {item.title.name}
          </li>

          {current.includes(item.id) && item.title.sub && renderDropdownItems(item.title.sub)}
        </ul>
      ))}

    </div>
  );
};

export default MultiLevelDropdown;
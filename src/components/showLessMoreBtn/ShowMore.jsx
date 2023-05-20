import React from 'react'
//mui icon
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const ShowMore = ({ toggle, setToggle }) => {

    return (
        <button className={`px-3 py-1 border border-gray-900 rounded-full hover:bg-gray-300 text-gray-900 font-bold cursor-pointer`}
            onClick={() => setToggle(!toggle)}
        >
            {!toggle ?
                <span>
                    Show more <KeyboardArrowDown />
                </span>
                :
                <span>
                    Show less <KeyboardArrowUp />
                </span>
            }
        </button>
    )
}

export default ShowMore
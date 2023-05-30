import React from 'react'

export const ButtonUnfilled = (props) => {
    return (
        <button className={`${props.full && "w-full"} px-4 py-2 border border-blue-500 rounded-full hover:bg-hovering text-blue-500 font-bold cursor-pointer`}>
            {props.text}
        </button>
    )
}

export const Buttonfilled = (props) => {
    return (
        <button className={`
        ${props.full && "w-full"} 
        ${props.lg ? "px-5 py-3" : "px-4 py-2"} 
        border rounded-full bg-primary hover:bg-primaryBold text-white font-bold cursor-pointer`}>
            {props.text}
        </button>
    )
}

export const TagButton = (props) => {
    return (
        <button className={`${props.full && "w-full"} px-4 py-2 border border-gray-900 rounded-full hover:bg-gray-300 text-gray-900 font-bold cursor-pointer`}>
            {props.text}
        </button>
    )
}
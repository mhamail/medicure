import React from 'react'

const BgIcon = ({icon,className}) => {
  return (
    <div className={` ${className?className:"bg-yellow-300"} p-3 rounded-xl flex items-center justify-center`}>
      {icon}
    </div>
  )
}

export default BgIcon
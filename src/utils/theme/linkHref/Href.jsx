import React from 'react'
import Link from 'next/link'

const Href = ({ to, children, className }) => {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  )
}

export default Href
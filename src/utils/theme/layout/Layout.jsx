import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '@/components/footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className='font-popin'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
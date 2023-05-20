
import React from 'react'
import Link from 'next/link';

//component
import MenuItems from '../menu/_MenuItems';
//utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth';
import { ButtonUnfilled } from '@/utils/theme/buttons/Buttons';
// theme
import Logo1 from '@/utils/theme/logo/Logo1';
const Header = () => {
    const heroSection = () => (
        <div id="hero">
            <ScreenWidth>
                <nav className='flex justify-between items-center h-20'>
                    <Link href="/">
                        <Logo1 />
                    </Link>
                    <div className='flex items-center relative h-20'>
                        <div className='hidden md:flex items-center space-x-5'>
                            <MenuItems />
                        </div>
                        <div className='hidden md:block text-gray-500 px-1 pl-4'>
                            <div className='w-[1px] h-10 bg-gray-400'></div>
                        </div>
                        <div className='space-x-2 flex items-center '>
                            <Link href="/" className='font-bold px-4 py-2 cursor-pointer hover:rounded-full hover:bg-hovering'>
                                Join now
                            </Link>
                            <Link href="/">
                                <ButtonUnfilled text="Sign in"/>
                            </Link>
                        </div>
                    </div>

                </nav>

            </ScreenWidth>
        </div>
    )
    return (
        <div>
            {heroSection()}
        </div>
    )
}

export default Header

import React from 'react'

//component
import MenuItems from '../menu/_MenuItems';
//utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth';
import { ButtonUnfilled } from '../buttons/Buttons';
import Href from '@/utils/theme/linkHref/Href';
// theme
import Logo1 from '@/utils/theme/logo/Logo1';
const Header = () => {
    const heroSection = () => (
        <div id="hero">
            <ScreenWidth>
                <nav className='flex justify-between items-center h-20'>
                    <Href to="/">
                        <Logo1 />
                    </Href>
                    <div className='flex items-center relative h-20'>
                        <div className='hidden md:flex items-center space-x-5'>
                            <MenuItems />
                        </div>
                        <div className='hidden md:block text-gray-500 px-1 pl-4'>
                            <div className='w-[1px] h-10 bg-gray-400'></div>
                        </div>
                        <div className='space-x-2 flex items-center '>
                            <Href to="/" className='font-bold px-4 py-2 hover:rounded-full hover:bg-hovering'>
                                Join now
                            </Href>
                            <Href to="/sigin">
                                <ButtonUnfilled text="Sign in" />
                            </Href>
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
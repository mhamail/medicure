import React from 'react'
import styled from '@emotion/styled'

//utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
import { Buttonfilled } from '@/utils/theme/buttons/Buttons'

const Background = styled.div`
    background-image: url(/bg.png);
    background-size:cover;
     background-position:center;
`
const Join = () => {
    return (
        <div>
            <Background className="h-screen">
                <ScreenWidth>
                    <h1 className='md:text-5xl text-4xl font-extralight md:leading-[70px!important]'>
                        Join your colleagues, classmates, and friends on LinkedIn.
                    </h1>
                    <div className='mt-2'>
                    <Buttonfilled text="Get Started" lg />
                    </div>
                </ScreenWidth>
            </Background>
        </div>
    )
}

export default Join
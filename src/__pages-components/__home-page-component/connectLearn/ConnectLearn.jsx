import React from 'react'
// utils
import ScreenWidth from '@/utils/theme/screenWidth/ScreenWidth'
// component
import ConnectCard from '@/components/connectCard/ConnectCard'
import LearnCard from '@/components/learnCard/LearnCard'


const ConnectLearn = () => {
    return (
        <div className='pt-20'>
            <ScreenWidth>
                <div className='flex flex-col md:flex-row space-y-14 md:space-y-0'>
                    <div className='md:w-1/2 w-full'>
                        <ConnectCard
                            image="/findPeople.svg"
                            title="Connect with people who can help"
                            btnText={"Find people you know"}
                            link={"#"}
                        />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <LearnCard
                            image="/skillLearn.svg"
                            title="Learn the skills you need to succeed"
                        />
                    </div>
                </div>
            </ScreenWidth>
        </div>
    )
}

export default ConnectLearn
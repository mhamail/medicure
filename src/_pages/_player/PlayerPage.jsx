import React, { useState } from 'react'
//pages component
import BarChartHeader from '@/__pages-components/__player-page-component/barChartHeader.jsx/BarChartHeader'
import ListAudio from '@/__pages-components/__player-page-component/listAudio/ListAudio'
//components
import SideBar2 from '@/components/sidebar2/SideBar2'
import CustomAudioPlayer from '@/components/customAudio/CustomAudioPlayer'

const PlayerPage = () => {
    const [audio, setAudio] = useState("")
    return (
        <SideBar2>
            <div className='relative '>
                <BarChartHeader />
                <div className='h-2 w-full bg-gray-500'></div>
                <div className="relative h-96 shadow-sm">
                    <div className="absolute inset-0 overflow-y-scroll">
                        <ListAudio setAudio={setAudio} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-10">
                        <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
                    </div>
                </div>

                <div className='mt-6 fixed bottom-0 w-full px-2 md:w-[calc(100%-224px)] flex justify-center'>
                    <div className="w-full md:max-w-[calc(100%-224px)]">
                        <CustomAudioPlayer srcAudio={audio} />
                    </div>
                </div>
            </div>
        </SideBar2>
    )
}

export default PlayerPage
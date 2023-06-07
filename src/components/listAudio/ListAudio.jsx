import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Pause, Heart } from 'lucide-react';

const ListAudio = ({ setAudio }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(null);

    const handlePlay = (index, item) => {
        setAudio(item.url);
        if (index === currentItemIndex) {
            setCurrentItemIndex(null);
        } else {
            setCurrentItemIndex(index);
        }
    };

    const list = [
        {
            url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
            title: 'Care Your Eye',
            duration: '04:33',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
        {
            url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
            title: 'Care Your Eye',
            duration: '04:24',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
        {
            url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
            title: 'Care Your Eye',
            duration: '03:46',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
        {
            url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
            title: 'Care Your Eye',
            duration: '04:33',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
        {
            url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
            title: 'Care Your Eye',
            duration: '04:24',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
        {
            url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
            title: 'Care Your Eye',
            duration: '03:46',
            writtenBy: 'abc',
            album: 'Eye Specialist',
        },
    ];

    const thead = () => {
        return (
            <tr>
                <th className="text-center"></th>
                <th className="text-center">File Name</th>
                <th className="text-center">Duration</th>
                <th className="text-center">Written By</th>
                <th className="text-center">Album</th>
            </tr>
        );
    };

    const tbody = () =>
        list.map((item, index) => (
            <tr
                key={index}
                className="[&>td]:border [&>td]:border-white cursor-pointer hover:bg-gray-100"
                onClick={() => handlePlay(index, item)}
            >
                <td className="flex justify-center">
                    {index !== currentItemIndex ? (
                        <Play
                            className="fill-gray-900 ml-4 text-sm cursor-pointer"
                            strokeWidth={1}
                            size={20}
                        />
                    ) : (
                        <Pause
                            className="fill-gray-900 ml-4 text-sm cursor-pointer"
                            strokeWidth={1}
                            size={20}
                        />
                    )}
                </td>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.writtenBy}</td>
                <td>{item.album}</td>
            </tr>
        ));

    return (
        <div className='flex flex-col space-y-4 md:px-10 py-10 w-full'>
            {list.map((item, index) => (
                <div key={index} 
                className={`p-2 rounded-xl bg-gray-200 cursor-pointer ${index===currentItemIndex?"bg-gray-300":"bg-gray-200"}`}>
                    <div className='flex justify-between items-center '
                        onClick={() => handlePlay(index, item)}
                    >
                        <div className='flex items-center space-x-4'>
                            <Image
                                src={"/music.png"}
                                alt={item.url}
                                height={50}
                                width={50}
                            />
                            <h2>
                                <span className='md:hidden'>
                                    {item.title.substring(0, 20)}...
                                </span>
                                <span className='hidden md:block'>
                                    {item.title}
                                </span>
                            </h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='flex'>Favourite: &nbsp;
                                <Heart className='hover:fill-red-500 cursor-pointer' color='red' /></div>
                            <p>Duration: &nbsp; {item.duration}</p>
                        </div>

                    </div>
                </div>
            ))}

        </div>

    );
};

export default ListAudio;

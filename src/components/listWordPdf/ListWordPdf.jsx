import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
//redux
import { useSelector } from 'react-redux';

const getFileExtension = (fileName) => {
    const extIndex = fileName.lastIndexOf('.');
    if (extIndex !== -1) {
        return fileName.substring(extIndex);
    }
    return '';
};


const ListWordPdf = () => {
    const list = useSelector(state => state.files.filesList)

    return (
        <div className='flex flex-col space-y-4 md:px-10 py-10 w-full'>
            {list && list.map((item, index) => (
                <div key={index} className={`p-2 rounded-xl hover:bg-gray-300 cursor-pointer}`}>
                    <div className='flex justify-between items-center w-full  bg-gray-200'>
                        <Link href={item.url} target="_blank" className='w-6/12 md:w-8/12 '>
                            <div className='flex items-center space-x-4 hover:underline'>
                                <Image
                                    className='scale-150'
                                    src={getFileExtension(item.url) == ".pdf" ? "/pdf.png"
                                        : getFileExtension(item.url) == ".docx" ? "/word.png"
                                            : "/unknown.png"}
                                    alt={item.url}
                                    height={50}
                                    width={50}
                                />
                                <h2 className='pl-4'>
                                    <span className='md:hidden'>
                                        {item.title.substring(0, 20)}...
                                    </span>
                                    <span className='hidden md:block'>
                                        {item.title}
                                    </span>
                                </h2>
                            </div>
                        </Link>
                        <div className='flex items-center space-x-2 z-20 pr-4 text-sm md:text-lg'>
                            <div className='flex '>Favourite: &nbsp;
                                <Heart className='hover:fill-red-500 cursor-pointer' color='red' /></div>
                            <p>Pages: &nbsp; {item.totalPages}</p>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default ListWordPdf
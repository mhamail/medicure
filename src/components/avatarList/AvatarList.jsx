import React from 'react'
const images = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
    "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=6",
    "https://i.pravatar.cc/100?img=7",
]
const additionalImagesCount = images.length - 4;

const AvatarList = () => {
    return (
        <div className='flex space-x-2'>
            {images.slice(0, 4).map((image, index) => (
                <div key={index} className="w-1/4 p-2">
                    <img src={image} alt="Avatar"
                        className="rounded-full w-full"
                    />
                </div>
            ))}

            {additionalImagesCount > 0 && (
                <div className="w-1/4 p-2">
                    <div className="rounded-full bg-gray-300 text-blue-400 flex justify-center items-center h-full font-bold border-2 border-blue-400 border-dashed">
                        <span className="text-xl text-center">
                            {`${additionalImagesCount}+`}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AvatarList
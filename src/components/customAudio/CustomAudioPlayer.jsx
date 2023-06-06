import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';


const CustomAudioPlayer = ({srcAudio}) => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef(null); // reference our audio component
    // const progressContainer = useRef(null); // reference the progress container
    const animationRef = useRef(null); // reference the animation
    const progressBar = useRef(null);

    useEffect(() => {
        if (srcAudio) {
          audioPlayer.current.src = srcAudio;
          audioPlayer.current.load();
        }
      }, [srcAudio]);
      
   useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioPlayer.current.duration);
    };

    audioPlayer.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audioPlayer.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

    useEffect(() => {
        audioPlayer.current.addEventListener('ended', handleAudioEnd);
        return () => {
          audioPlayer.current.removeEventListener('ended',handleAudioEnd);
        };
      }, []);

      const handleAudioEnd = () => {
        setIsPlaying(false);
        cancelAnimationFrame(animationRef.current);
      };

    // handle functions
    const togglePlayer = () => {
        if (!isPlaying && srcAudio) {
            setIsPlaying(true);
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            setIsPlaying(false);
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    };

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const whilePlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = (e) => {
        audioPlayer.current.currentTime = progressBar.current.value;
        setCurrentTime(audioPlayer.current.currentTime);
    };

    return (
        <div className="flex flex-col justify-center w-full bg-gray-900 text-white p-6 rounded-full">
            <audio ref={audioPlayer} src={srcAudio} preload="metadata"></audio>
            <div className="flex justify-between items-center">
                <div>
                    <div
                        className="bg-stone-300 p-2 md:p-10 rounded-full text-gray-900 cursor-pointer hover:bg-stone-400 hover:text-white transition-all duration-300"
                        onClick={() => togglePlayer()}
                    >
                        {isPlaying ? <Pause size={35} /> : <Play size={35} />}
                    </div>
                </div>
                <div className="w-1/2 mx-auto">
                    <h2 className="text-xl text-center select-none">Care Your Eye</h2>
                    <div className="">
                        <div className="">
                            <input
                            ref={progressBar}
                                type="range"
                                className="w-full mt-4 cursor-pointer"
                                value={currentTime}
                                min="0"
                                max={duration}
                                step="1"
                                onChange={changeRange}
                            />
                        </div>
                    </div>
                </div>
                <div className="text-lg">
                    {calculateTime(currentTime)}/{duration && !isNaN(duration) && calculateTime(duration)}
                </div>
            </div>
        </div>
    );
};

export default CustomAudioPlayer;






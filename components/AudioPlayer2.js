import React, { useState, useRef, useEffect } from 'react';
import styles from '../src/styles/AudioPlayer2.module.css';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaVolumeUp} from 'react-icons/fa';



const AudioPlayer2 = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const audioPlayer = useRef();
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);

        setDuration[seconds];
        audioPlayer.current.volume = volume;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, volume]);

    const togglePlayPause = () => {

        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }
    const handleVolumeChange = (event) => {
        setVolume(event.target.value / 100);
    };

    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src='https://radiostreamingserver.com.ar/proxy/rdn/stream?type=.mp3' preload='metadata'></audio>

            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <FaVolumeUp className={styles.iconVol}/>
            <div>
                <input  type="range" min="0" max="100" onChange={handleVolumeChange} className={styles.progressBar} />
            </div>
        </div>
    )  
}

export { AudioPlayer2 }
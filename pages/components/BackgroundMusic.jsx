// components/BackgroundMusic.js
import { useEffect } from 'react';

const BackgroundMusic = () => {
    useEffect(() => {
        const audio = document.getElementById('background-audio');
        if (audio) {
            audio.play();
        }
    }, []);

    return (
        <audio id="background-audio" src="/background-music.mp3" autoPlay loop>
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundMusic;

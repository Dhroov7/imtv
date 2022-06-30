import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './videoPlayer.css';

export const VideoJS = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady } = props;

    React.useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;

            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });
        } else {}
    }, [options, videoRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className='video-js vjs-big-play-centered' />
        </div>
    );
}

export default VideoJS;
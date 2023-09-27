import React, { useRef, useEffect } from 'react';

function VideoPlayer({ rtspUrl, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="VideoPlayer">
      <video
        ref={videoRef}
        src={rtspUrl}
        controls  
        width="640"
        height="360"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;

import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer'; 
import OverlayManager from './OverlayManager'; 
import OverlayService from '../services/OverlayService'; 

function App() {
  const [rtspUrl, setRtspUrl] = useState('');
  const [overlays, setOverlays] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    OverlayService.getOverlays()
      .then((data) => setOverlays(data))
      .catch((error) => console.error('Error fetching overlays:', error));
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <h1>Live Video Stream</h1>
      <div>
        <input
          type="text"
          placeholder="Enter RTSP URL"
          value={rtspUrl}
          onChange={(e) => setRtspUrl(e.target.value)}
        />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <VideoPlayer rtspUrl={rtspUrl} isPlaying={isPlaying} />
      <OverlayManager overlays={overlays} />
    </div>
  );
}

export default App;

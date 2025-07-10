import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track audio playback
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause(); // Pause the audio
      } else {
        audio.play(); // Play the audio
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <div className="landing-page">
      {/* Background Audio */}
      <audio ref={audioRef} src={process.env.PUBLIC_URL + '/christmas.mp3'} loop />

      {/* Jingle Bell Button */}
      <button onClick={toggleAudio} className="jingle-bell-button">
        <span className="bell-icon">🔔</span>
      </button>
      <div className="carousel">
        <div className="carousel-content">
          <h1 className="carousel-title">It's Christmas Time Now</h1>
          <p className="carousel-subtitle">
            <b style={{ color: "white" }}>Chúc cô Hường và các bạn hoạ sĩ nhỏ có thêm một mùa Giáng sinh vui vẻ và ấm áp bên người thân, yêu thương của mình nhé!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

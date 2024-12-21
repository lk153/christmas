import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="landing-page">
      {/* Background Audio */}
      <audio ref={audioRef} src={process.env.PUBLIC_URL + '/christmas.mp3'} loop />

      {/* Jingle Bell Button */}
      <button onClick={handlePlay} className="jingle-bell-button">
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

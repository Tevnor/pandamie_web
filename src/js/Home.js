import React from 'react'
import NavHome from './NavHome'
import '../scss/App.scss';
import '../scss/home.scss';
import bgVideo from '../media/videos/panda.mp4'

function Home() {
  return (
    <div className="home">
      <nav className="navHome">
        <NavHome />
      </nav>
      <div className="homeVideoContainer">
          <video className="homeVideo" autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%",
            zIndex: "-1"
          }}>
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="shadow"></div>
      </div>
    </div>

  );
}

export default Home;

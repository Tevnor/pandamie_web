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
      <a className="credit" target="_blank" rel="noreferrer noopener" href="https://www.freestock.com/free-videos/cute-giant-panda-bear-eating-bamboo-3816065">Video used under license from Freestock.com</a>
    </div>

  );
}

export default Home;

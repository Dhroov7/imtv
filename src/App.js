import Highlights from "./components/Highlights/Highlights";
import NavBar from "./components/Navbar/NavBar";
import ContentSlider from "./components/ContentSlider/ContentSlider";
import Footer from "./components/Footer/Footer";

//assets
import cocktailImage from "./assets/images/movies/cocktail.png";
import dhamakaImage from "./assets/images/movies/dhamaka.png";
import doctorStrangeImage from "./assets/images/movies/doctorStrange.png";
import bigBullImage from "./assets/images/movies/bigBull.png";

import React from 'react';
// import VideoJS from './components/videoPlayer/videoPlayer';
// import './components/videoPlayer/videoPlayer.css';

function App() {
  // const playerRef = React.useRef(null);

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   responsive: true,
  //   fluid: true,
  //   sources: [{
  //     src: 'https://dz8zqf9mog2ka.cloudfront.net/Thor.mp4',
  //     type: 'video/mp4'
  //   }],
  //   controlBar: {
  //     pictureInPictureToggle: false
  //   },
  //   playbackRates: [0.5, 1, 1.5, 2]
  // };

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player;

  //   // You can handle player events here, for example:
  //   player.on('waiting', () => {
  //     console.log('player is waiting');
  //   });

  //   player.on('dispose', () => {
  //     console.log('player will dispose');
  //   });
  // };

  // return (
  //   <>
  //     <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  //   </>
  // );
  return (
    <div className="App">
      <NavBar />
      <Highlights />
      <ContentSlider contentTitle={"Continue Watching"} contentList={[{ image: cocktailImage, name: "cocktail" }, { image: dhamakaImage, name: "dhamaka" }, { image: doctorStrangeImage, name: "doctor strange" }, { image: bigBullImage, name: "big bull" }]}/>
      <ContentSlider contentTitle={"Your Watchlist"} contentList={[{ image: cocktailImage, name: "cocktail" }, { image: dhamakaImage, name: "dhamaka" }, { image: doctorStrangeImage, name: "doctor strange" }, { image: bigBullImage, name: "big bull" }]} />
      <ContentSlider contentTitle={"IMTV Productions"} contentList={[{ image: cocktailImage, name: "cocktail" }, { image: dhamakaImage, name: "dhamaka" }, { image: doctorStrangeImage, name: "doctor strange" }, { image: bigBullImage, name: "big bull" }]} />
      <Footer />
    </div>
  );
}

export default App;

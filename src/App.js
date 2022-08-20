import Highlights from "./components/Highlights/Highlights";
import NavBar from "./components/Navbar/NavBar";
import ContentSlider from "./components/ContentSlider/ContentSlider";
import Footer from "./components/Footer/Footer";

import { React, useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [continueWatching, setContinueWatching] = useState([]);
  const [imtvProductions, setImtvProductions] = useState([]);
  const [classics, setclassics] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("{HOST_URL}/api/v1/classics/list", {
        headers: {
          "Authorization": "API_KEY"
        }
      }),
      axios.get("{HOST_URL}/api/v1/imtv_productions/list", {
        headers: {
          "Authorization": "API_KEY"
        }
      })
    ]).then(([classicList, imtvProductionList]) => {
      setclassics(classicList.data.data)
      setImtvProductions(imtvProductionList.data.data)
    })
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Highlights />
      {
        continueWatching.length > 0 &&
        <ContentSlider contentTitle={"Continue Watching"} contentList={continueWatching} />
      }
      {
        classics.length > 0 &&
        <ContentSlider contentTitle={"Classics"} contentList={classics} />
      }
      {
        imtvProductions.length > 0 &&
        <ContentSlider contentTitle={"IMTV Productions"} contentList={imtvProductions} />
      }
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import VideoPlayerComp from "./components/videoPlayer/videoPlayerComp";
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/">
        <Route index  element={<App />} />
          <Route path="watch" element={<VideoPlayerComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

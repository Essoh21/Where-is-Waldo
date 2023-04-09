
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import levelOneImage from "./images/artStationImage.jpg"
import levelTwoImage from "./images/li-decai-5-2.jpg"
import levelThreeImage from "./images/paint.png"
import Page from './Pages/Page';
import Chrono from './HeaderCompoents/Chrono';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/levelOne' element={<Page Timer={<Chrono />} levelImage={levelOneImage} />} />
        <Route path='/levelTwo' element={<Page Timer={<Chrono />} levelImage={levelTwoImage} />} />
        <Route path='/levelThree' element={<Page Timer={<Chrono />} levelImage={levelThreeImage} />} />
        <Route path='Scores' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

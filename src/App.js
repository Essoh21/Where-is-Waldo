
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import levelOneImage from "./images/artStationImage.jpg"
import levelTwoImage from "./images/li-decai-5-2.jpg"
import levelThreeImage from "./images/bobogai.jpg"
import Page from './Pages/Page';
import Chrono from './HeaderCompoents/Chrono';
import LevelOneHiddens from './images/HiddenImages/levelOne/LevelOneHiddens';
import LevelTwoHiddens from './images/HiddenImages/levelTwo/LevelTwoHiddens';
import LevelThreeHiddens from './images/HiddenImages/levelThree/LevelThreeHiddens';
import StyledHiddenImages from './HeaderCompoents/HidenImages';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/levelOne' element={<Page Timer={<Chrono />}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelOneHiddens} />}
          levelImage={levelOneImage} />} />
        <Route path='/levelTwo' element={<Page Timer={<Chrono />}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelTwoHiddens} />}
          levelImage={levelTwoImage} />} />
        <Route path='/levelThree' element={<Page Timer={<Chrono />}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelThreeHiddens} />}

          levelImage={levelThreeImage} />} />
        <Route path='Scores' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

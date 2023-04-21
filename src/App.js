
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import levelOneImage from "./images/artStationImage.jpg"
import levelTwoImage from "./images/li-decai-5-2.jpg"
import levelThreeImage from "./images/bobogai.jpg"
import Page from './Pages/Page';
import LevelOneHiddens from './images/HiddenImages/levelOne/LevelOneHiddens';
import LevelTwoHiddens from './images/HiddenImages/levelTwo/LevelTwoHiddens';
import LevelThreeHiddens from './images/HiddenImages/levelThree/LevelThreeHiddens';
import StyledHiddenImages from './HeaderCompoents/HidenImages';
const shouldDisplayCustomMouse = true;

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/levelOne' element={<Page displayTimer={true}
          shouldDisplayCustomMouse={shouldDisplayCustomMouse}
          hiddenElementsArray={LevelOneHiddens}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelOneHiddens} />}
          levelImage={levelOneImage} />} />
        <Route path='/levelTwo' element={<Page displayTimer={true}
          shouldDisplayCustomMouse={shouldDisplayCustomMouse}
          hiddenElementsArray={LevelTwoHiddens}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelTwoHiddens} />}
          levelImage={levelTwoImage} />} />
        <Route path='/levelThree' element={<Page displayTimer={true}
          shouldDisplayCustomMouse={shouldDisplayCustomMouse}
          hiddenElementsArray={LevelThreeHiddens}
          hiddenElements={<StyledHiddenImages hiddenElements={LevelThreeHiddens} />}

          levelImage={levelThreeImage} />} />
        <Route path='/Scores' element={<Page
          shouldDisplayCustomMouse={!shouldDisplayCustomMouse}
        />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

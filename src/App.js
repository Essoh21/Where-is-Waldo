
import React, { useState } from 'react';
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
import CustomMouseContext from './Context/CustomMouseContext';


function App() {
  const [displayCmouse, setDisplayCmouse] = useState(true);
  const handleDisplayCmouse = (e) => {
    setDisplayCmouse(true);
  }
  const handleRemoveCmouse = (e) => {
    setDisplayCmouse(false);
  }
  return (

    <BrowserRouter>
      <CustomMouseContext.Provider value={{ handleDisplayCmouse, handleRemoveCmouse }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/levelOne' element={<Page displayTimer={true}
            shouldDisplayCustomMouse={displayCmouse}
            hiddenElementsArray={LevelOneHiddens}
            hiddenElements={<StyledHiddenImages hiddenElements={LevelOneHiddens} />}
            levelImage={levelOneImage} />} />
          <Route path='/levelTwo' element={<Page displayTimer={true}
            shouldDisplayCustomMouse={displayCmouse}
            hiddenElementsArray={LevelTwoHiddens}
            hiddenElements={<StyledHiddenImages hiddenElements={LevelTwoHiddens} />}
            levelImage={levelTwoImage} />} />
          <Route path='/levelThree' element={<Page displayTimer={true}
            shouldDisplayCustomMouse={displayCmouse}
            hiddenElementsArray={LevelThreeHiddens}
            hiddenElements={<StyledHiddenImages hiddenElements={LevelThreeHiddens} />}

            levelImage={levelThreeImage} />} />
          <Route path='/Scores' element={<Page needScores={true} />} />
        </Routes>
      </CustomMouseContext.Provider>
    </BrowserRouter>
  );

}

export default App;

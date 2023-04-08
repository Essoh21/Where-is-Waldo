
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page from './Pages/Page';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/levelOne' element={<Page />} />
        <Route path='Scores' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

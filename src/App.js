
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';



const  App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
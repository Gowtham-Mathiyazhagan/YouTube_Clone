import React from 'react'
import Header from './Components/Header'
import './App.css'
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import TopHeadLine from './Components/TopHeadLine';
import LeftSideBar from './Components/LeftSideBar';
import PlayList from './Components/PlayList';
import { Route, Routes } from 'react-router-dom';
import Watch from './Components/Watch';

function App() {
  return (
<>
<div className="main-container">
<Header/>
<TopHeadLine/>
<LeftSideBar/>
<PlayList/>
</div>
</>  )
}

export default App
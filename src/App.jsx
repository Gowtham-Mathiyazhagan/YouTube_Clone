import React, { createContext, useContext, useReducer } from "react";
import Header from "./Components/Header";
import "./App.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import TopHeadLine from "./Components/TopHeadLine";
import LeftSideBar from "./Components/LeftSideBar";
import PlayList from "./Components/PlayList";
import { Route, Routes, Router } from "react-router-dom";
import Watch from "./Components/Watch";

// Created context
const searchContext = createContext(null);
const dispatchContext = createContext(null);

export function App() {
  const [search, dispatch] = useReducer(searchReducer, "all");
  return (
    <>
      <div className="main-container">
        <searchContext.Provider value={search}>
          <dispatchContext.Provider value={dispatch}>
             <Header />
            <Routes>
              <Route path="/" element={<TopHeadLine />} />
              <Route path="/search/:searchTerm" element={<TopHeadLine />} />
            </Routes>

            <Routes>
              <Route path="/" element={<LeftSideBar />} />
            </Routes>

            <Routes>
              <Route path="/" element={<PlayList />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/search/:searchTerm" element={<PlayList />} />
            </Routes> 


        
          </dispatchContext.Provider>
        </searchContext.Provider>
      </div>
    </>
  );
}

// custom hooks

export const useSearch = () => {
  return useContext(searchContext);
};

export const useDispatch = () => {
  return useContext(dispatchContext);
};

// created reducer function
function searchReducer(initialVal, action) {
  switch (action.type) {
    case "change": {
      return action.data;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

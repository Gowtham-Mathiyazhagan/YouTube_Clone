import React from "react";
import { useRef } from "react";
import { scroller } from "react-scroll";
import "./topheadline.css";
const TopHeadLine = () => {
  const containerRef = useRef(null);
  const handleMove = (direction) => {
    let container = containerRef.current;
    console.log(container);
    if (container) {
      let setValue =
        direction == "right" ? container.offsetWidth : -container.offsetWidth;
      console.log(setValue);
      container.scrollTo({
        left: container.scrollLeft + setValue,
        behaviour: "smooth",
      });
    }
  };
  return (
    <>
      <div className="TopHeadLines-container">
        <button onClick={() => handleMove("left")}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="white-shadow">
          <div className="top-child" ref={containerRef}>
            {topHeadLines.map((data) => (
              <div key={data}>{data}</div>
            ))}
          </div>
        </div>
        <button onClick={() => handleMove("right")}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </>
  );
};
const topHeadLines = [
  "all",
  "fitness",
  "front-end-dev",
  "javascript",
  "tamil comedy",
  "madan gowri",
  "news",
  "sports",
  "music",
  "movie",
  "game",
  "java developer",
  "stock market",
  "football",
  "communication",
  "amazon",
  "flipkart",
  "ajio",
  "food vlog",
  "Put Chutney",
  "Madras Meter",
  "Smile Settai",
  "Cinema Vikatan",
  "Black Sheep",
  "Chennai Memes",
  "Sillaakki Dumma",
  "Eruma Saani",
  "Parithabangal",
  "fun",
];
export default TopHeadLine;

import React from "react";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar-container">
      <div className="sidebar-icons">
		<div className="home">
		<i class="bi bi-house-door-fill"></i>
			<div>Home</div>
		</div>
		<div className="sorts">
		<i class="bi bi-film"></i>
			<div>Sorts</div>
		</div>
		<div className="subscription">
		<i class="bi bi-collection-play-fill"></i>
			<div>Subscription</div>
		</div>
		<div className="you">
		<i class="bi bi-file-earmark-play"></i>
			<div>you</div>
		</div>
	  </div>
    </div>
  );
};

export default LeftSideBar;

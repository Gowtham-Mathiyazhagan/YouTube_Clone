import React from "react";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar-container">
      <div className="sidebar-icons">
		<div className="home">
			<div>Home</div>
		</div>
		<div className="sorts">
			<div>Sorts</div>
		</div>
		<div className="subscription">
			<div>Subscription</div>
		</div>
		<div className="you">
			<div>you</div>
		</div>
	  </div>
    </div>
  );
};

export default LeftSideBar;

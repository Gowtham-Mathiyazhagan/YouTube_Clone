import React from 'react'
import img from '../assets/gowtham.jpg'
import './playlist.css'
const PlayList = () => {
  return (
	<div className='playlist-container'>
     <div className="content-cards">
		<div className="card">
			{/* <img src={img} alt="" /> */}
			<div className="video-details">
				{/* <img src={img} alt="" /> */}
				<div className="title-section">
                 <h4>Sharing my first ever INTERVIEW experience | Basic tips | Tamil</h4>
				 <p>sedulous gowtham</p>
				</div>
			</div>
			</div>
			<div className="card">
			{/* <img src={img} alt="" /> */}
			<div className="video-details">
				{/* <img src={img} alt="" /> */}
				<div className="title-section">
                 <h4>Sharing my first ever INTERVIEW experience | Basic tips | Tamil</h4>
				 <p>sedulous gowtham</p>
				</div>
			</div>
			</div>
			<div className="card">
			{/* <img src={img} alt="" /> */}
			<div className="video-details">
				{/* <img src={img} alt="" /> */}
				<div className="title-section">
                 <h4>Sharing my first ever INTERVIEW experience | Basic tips | Tamil</h4>
				 <p>sedulous gowtham</p>
				</div>
			</div>
			</div>
	 </div>
	</div>
  )
}

export default PlayList
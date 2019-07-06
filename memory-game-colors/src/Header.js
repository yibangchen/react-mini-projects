import React from 'react';
import './Header.css';

const Header = () => (
	<div className="Header">
		<div className="container left-box">
			<div className="header-item">About Game</div>
		</div>
		<div className="container right-box">
			<div className="header-item">Restart</div>
			<div className="header-item">Easier</div>
			<div className="header-item">Harder</div>
			<div className="header-item">Record</div>
		</div>
	</div>
);

export default Header;
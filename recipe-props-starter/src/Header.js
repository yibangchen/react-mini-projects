import React from 'react';
import './Header.css';

function Header() {
	const nav = ["New Recipe", "Home", "About", "Contact Us"];
	return (
		<div className="header">
			<div className="header-item">Recipe App</div>
			<div className="header-item nav">
				{ nav.map((e,i) => <div className="nav-item" key={i}>{e}</div>) }
			</div>
		</div>
	);
}

export default Header;
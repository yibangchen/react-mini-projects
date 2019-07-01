import React from 'react';
import './Box.css';

const Box = (props) => {
	const blocks = props.colors.map((c, i) => {
		return <div key={i} className="block" style={{backgroundColor: c}}></div>
	});

	return ( 
		<div className="container">
			{blocks}
		</div>
	);
}

export default Box;
import React from 'react';
import './Success.css';

const Success = (props) => {

	const style= {};
	if (props.status === 0)
		style.display = "none";

	return (<div className="Success">
		<div style={ style }>
			<h1>GREAT JOB!</h1>
			<button>restart</button>
			<button>Harder</button>
		</div>
	</div>);
}

export default Success;
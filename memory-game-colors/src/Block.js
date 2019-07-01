import React from 'react';
// import PropTypes from 'prop-types';
import './Block.css';

const Block = (props) => {
	// static defaultProps = {
	// 	onClickBlock() {}
	// }

	// static propTypes = {
	// 	onClickBlock: PropTypes.func
	// }

	return (
		<div className="block" onClick={props.onClickBlock}></div>
	);
}

export default Block;
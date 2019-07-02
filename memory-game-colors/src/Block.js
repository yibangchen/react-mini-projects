import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Block.css';

class Block extends Component {

	constructor(props) {
		super(props);
	}

	static defaultProps = {
		onClickBlock() {}	
	}

	static propTypes = {
		onClickBlock: PropTypes.func
	}

	render() {
		const style={}
		if (this.props.showIndicator === 1){ style.backgroundColor = this.props.color; }

		return (
			<div 
				className="block" 
				onClick={ this.props.onClickBlock }
				style={ style }
			></div>
		);}
}

export default Block;
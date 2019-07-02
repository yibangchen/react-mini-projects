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

	handleClick = (e) => {
		e.preventDefault();
		this.props.onClickBlock(this.props.listIndex);
	}

	render() {
		const style={}
		if (!this.props.canShow)
			style.backgroundColor = this.props.color;

		return (
			<div 
				className="block" 
				onClick={ this.handleClick }
				style={ style }
			></div>
		);}
}

export default Block;
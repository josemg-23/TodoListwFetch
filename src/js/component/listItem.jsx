import React from "react";

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
		//this.itemClick.bind(this);
	}

	itemClick = () => {
		this.props.delete(this.props.itemId);
	};

	render() {
		return (
			<li
				onClick={this.itemClick}
				className="list-group-item list-group-item-action">
				{this.props.itemValue}
			</li>
		);
	}
}

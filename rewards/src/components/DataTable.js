import React, { Component } from 'react';

class DataTable extends Component {
	constructor(props) {
		super(props);
		this.calculatePoints = this.calculatePoints.bind(this);
	}

	calculatePoints(amount) {
		const price = Math.floor(parseFloat(amount.substring(1)));
		// 2 points for every dollar spent over 100
		// 1 point for every dollar spent over 50
		let point = 0;
		if (price > 100) {
			point = (price - 100) * 2 + 50;
		} else if (price > 50) {
			point = price - 50;
		}
		return point;
	}

	render() {
		return (
			<tr>
				<td>{this.props.obj.purchase_date}</td>
				<td>{this.props.obj.customer_name}</td>
				<td>{this.props.obj.amount}</td>
				<td>{this.calculatePoints(this.props.obj.amount)}</td>
			</tr>
		);
	}
}

export default DataTable;

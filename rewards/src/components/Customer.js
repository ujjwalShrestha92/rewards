import React, { Component } from 'react';
import DataTable from './DataTable';
import axios from 'axios';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = { customerCollectioin: [] };
		this.dataTable = this.dataTable.bind(this);
	}

	async componentDidMount() {
		const response = await axios.get(
			'https://mocki.io/v1/d3e384d2-1ed7-491e-8f08-15abead7e267' // mock api from dummydata.json mocki.io
		);
		this.setState({ customerCollectioin: [ ...this.state.customerCollectioin, ...response.data ] });
	}

	dataTable() {
		return this.state.customerCollectioin.map((data, i) => {
			return <DataTable obj={data} key={i} />;
		});
	}

	render() {
		return (
			<div className="Customer-users">
				<div className="Customer-container">
					<table className="Customer table table-striped table-dark">
						<thead className="Customer thead-dark">
							<tr>
								<td>Date</td>
								<td>Customer Name</td>
								<td>Purchase Amount</td>
								<td>Points Earned</td>
							</tr>
						</thead>
						<tbody>{this.dataTable()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Customers;

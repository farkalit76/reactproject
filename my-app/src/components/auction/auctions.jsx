import React, { Component } from 'react';
import axios from 'axios';
import AuctionRow from './auctionRow';
import SerachFlight from './serachFlight';
//import './aucpages.css';

class Auction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			auctions: []
		};
	}

	componentDidMount() {
		let input = {
			platform: 'BIDDING',
			userId: '2ba08cf9-ffc7-4266-92b3-42f111cab0e4'
		};

		let url = 'http://localhost:8080/api/v1/search/auction/all';
		let head = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Cookie-id': '1234',
				'Postman-Token': '18e399a0-1bdc-4351-86cf-994f771891f5,3dbdc8be-cf6f-4f17-938d-8cf1b4689e17',
				'cache-control': 'no-cache',
				nocache: '1'
			}
		};
		axios
			.post(url, input, head)
			.then((res) => {
				//console.log('response:',res);
				return res.data;
			})
			.then((data) => {
				//since it returns one row, so put this into [],
				//so that array.map() return the response.
				console.log('data:', data);
				if (data !== null && data !== '') {
					this.setState({
						auctions: data
					});
				} else {
					this.setState({
						auctions: []
					});
				}
			})
			.catch((error) => {
				this.setState({ hasError: true, error: error });
				console.log('Error by fetching all auctions from WS:', error);
			});
	}

    // $(document).ready( () => {
    //     $('#dtBasicExample').DataTable();
    //     $('.dataTables_length').addClass('bs-select');
    //   });

	render() {
		return (
			<div id="main" className="container">
                <br/>
                <div className="container">
                    <SerachFlight />
                </div>
				<h2>Auction List</h2>
				<table id="dtBasicExample" className="table  table-hover table-sm" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th className="th-sm">Type<i className="fa fa-sort float-right" aria-hidden="true"></i></th>
                            <th scope="col">Code</th>
                            <th scope="col">Highest Value</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Reserve Value</th>
                            <th scope="col">Start Date</th>
                            <th scope="col"></th>
                        </tr>
					</thead>
					<AuctionRow data={this.state.auctions} />
				</table>
                <div id="#main"></div>
			</div>
		);
	}
}

export default Auction;

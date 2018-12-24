import React, { Component } from 'react';
import image1 from '../../assets/images/mock/activity-placeholder.png';
//import Modal from 'react-modal';
//const SERVICE_URL = 'https://apigeeint.programneo.com';
//Modal.setAppElement('#main');

class AuctionInfo extends Component {
	state = {};

	render() {
		return(
		<div id ="main" className="container">
				<div className="row"><img src={image1} alt="autions"  height="100px"/></div>
				<div className="row">Type: {this.props.auctionInfo.auctionItems[0].type}</div>
				<div className="row">Code: {this.props.auctionInfo.code}</div>
				<div className="row">H. Value: {this.props.auctionInfo.highestValue}</div>
				<div className="row">Quantity: {this.props.auctionInfo.quantity}</div>
				<div className="row">R. Value: {this.props.auctionInfo.reserveValue}</div>
		</div>);
	}
}

export default AuctionInfo;

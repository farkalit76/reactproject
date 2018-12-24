import React, { Component } from 'react';
import Modal from 'react-modal';
//import ReactModal from 'react-modal';
import AuctionInfo from './auctionInfo'; 
import Moment from 'react-moment';

//Modal.setAppElement('#child');
//ReactModal.setAppElement('#main');



const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

class AuctionRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
            modalIsOpen: false,
            infoData:null
		};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(e) {
		this.setState({ modalIsOpen: true, infoData:e});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		//this.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	handleDetails = (e) => {
		//console.log('e:', e);
		//alert(<AuctionInfo />);
	};

	componentDidMount() {
		Modal.setAppElement('body');
	 }
    
	render() {
		let rows = this.props.data.map((item, index) => {
			return (
                <tbody key={index}>
					<tr >
						<td>{item.auctionItems[0].type}</td>
						<td>{item.code}</td>
						<td>{item.highestValue}</td>
						<td>{item.quantity}</td>
						<td>{item.reserveValue}</td>
						<td><Moment format="DD-MMM-YYYY" >{item.startDateTime}</Moment></td>
						<td>
							<button className="btn btn-sm" onClick={this.openModal.bind(this, item)} >Details</button>
							<Modal
								isOpen={this.state.modalIsOpen}
								onAfterOpen={this.afterOpenModal}
								onRequestClose={this.closeModal}
								style={customStyles}
								contentLabel="Example Modal"
							>
								<h2 ref={(subtitle) => (this.subtitle = subtitle)}>Auction Detail</h2>
								<AuctionInfo auctionInfo={this.state.infoData} index={index}/>
								<button className="btn btn-sm" onClick={this.closeModal}>Close</button>
							</Modal>
						</td>
					</tr>
				</tbody>
			);
		});
		return rows;
	}
}

export default AuctionRow;

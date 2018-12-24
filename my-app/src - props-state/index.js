import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var styles  = {color: 'red'};
var styles2  = {color: 'blue'};

class Header extends React.Component{
	constructor(props){
		super(props); 
		this.state ={
			user: 'test',
			id: 'AB101',
		}
	}
	
	render(){
		setTimeout( ()=>{ 
			this.setState({ user: 'abcd'})
		} , 3000);
		return <div>
				<h1>This is Top Component. User is ({this.state.user})</h1>
			</div>;
	}
}

class Footer extends React.Component{
	
	render(){
		return <h1>This is Footer Component.</h1>;
	}
}
class Welcome extends React.Component
{	
	constructor(props){
		super(props); 
		//alert(props.name);
		this.state ={
			hasError: false,
		}
	}
	
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}
	
	render(){
		if( this.state.hasError){
			return <h1>Something went wrong!! </h1>
		}
		else
		{	
			return <div>
					<div style= {styles}>
						<Header />
					</div>
					<h2>Hello {this.props.name}, your age is {this.props.age}.</h2>
					<div style= {styles2}>
						<Footer />
					</div>
				</div>
				;
		}
	};
	
	componentDidMount(){
		var name=this.props.name
		name = 'Usmani';
		//alert('componentDidMount'+name);
	}
}

ReactDOM.render(
	<Welcome name='Usman' age='23'/>, document.getElementById('root')
);
import React, { Component } from 'react';

class Person extends Component {

    constructor()
    {
        super();
        this.state = {  
            hasError: false,
            person: []
        }
    }

    componentDidMount(){
        fetch('http://NB3121721314:8090/fu/sboot/person/list')
        .then( res => res.json())
        .then( res => {
            console.log('response:',res);
            this.setState({
                person: res
            });
        }).catch( error =>{
            console.log('Error fetching list WS:', error);
        })
    }

    handleSearch() {
        let keyword = this.refs.keyword.value;
        console.log("search clicked, id:" + keyword);
        fetch("http://localhost:8090/fu/sboot/person/byid?id=" + keyword)
          .then(res => res.json())
          .then(data => {
            //since it returns one row, so put this into [],
            //so that array.map() return the response.
            this.setState({
                person: [data]
            });
          })
          .catch(error => {
            console.log("Error fetching serach by id WS:", error);
          });
      }

    render() {
       
        return ( <div className="container">
        <h2>Person Listing</h2>
        <h3>Result Size: {this.state.person.length}</h3>
        <div>
            Person ID: <input type="text" ref="keyword" />&nbsp;
            <button name="btn" onClick={this.handleSearch.bind(this)}>
              Search
            </button>
          </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">ID</div>
                    <div className="col-sm-2">Name</div>
                    <div className="col-sm-2">Address</div>
                    <div className="col-sm-2">Phone</div>
                    <div className="col-sm-2">Email</div>
                </div>
                {this.state.person.map( function(p, index){
                    return(
                        <div className="row" key={p.id}>
                            <div className="col-sm-2">{p.id}</div>
                            <div className="col-sm-2">{p.name}</div>
                            <div className="col-sm-2">{p.address}</div>
                            <div className="col-sm-2">{p.phone}</div>
                            <div className="col-sm-2">{p.email}</div>
                        </div>
                    );
                })}
                
            </div>
        </div> );
       
    }
}
 
export default Person;
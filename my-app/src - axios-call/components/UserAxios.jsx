import React, { Component } from "react";
import axios from "axios";

class UserAxios extends Component {
    state ={
        repos: null
    }
  handleSearch() {
    let keyword = this.refs.keyword.value;
    console.log("search clicked, id:" + keyword);
    axios.get(`https://api.github.com/users/${keyword}`)
      .then( res => {
        console.log("response:" + res);
        const repos = res.id;
        console.log("repos:" + repos);
        this.setState({repos: repos});
      })
      .catch(error => {
        console.log("Error fetching serach by id WS:", error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>UserForm by Axiom</h2>
        <div>
          User ID: <input type="text" ref="keyword" />
          &nbsp;
          <button name="btn" onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </div>
        <div className="container">
        {this.state.repos ? <p>Number of Repose :{this.stata.repos}</p>: <p>Please enter User ID.</p>}
        </div>
      </div>
    );
  }
}

export default UserAxios;

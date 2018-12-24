import React, { Component } from "react";

//catch the response error in better way,
//by using componentDidCatch();
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      products: []
    };
  }

  static getDerivedStateFromError(error) {
    console.log('error...:', error)
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //logErrorToMyService( error, info);
    console.log("Error:" + error);
    console.log("Info:" + info);
  }

  componentDidMount() {
    fetch("http://NB3121721314:8090/fu/sboot/product/list")
      .then(res => {
        //console.log('first response :',res);
        return res.json();
      })
      .then(data => {
        console.log("data:", data);
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.log("Error fetching WS:", error);
      });
  }

  handleSearch() {
    let keyword = this.refs.keyword.value;
    console.log("search clicked, id:" + keyword);
    fetch("http://NB3121721314:8090/fu/sboot/product/byName?name=" + keyword)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.log("Error fetching serach by id WS:", error);
      });
  }

  render() {
    console.log("hasError:" + this.state.hasError);
    if (this.state.hasError) {
      return <div>Something went wrong while calling WS.</div>;
    } else {
      return (
        <div className="container">
          <h2>Product Listing</h2>
          <h2>Product Size: {this.state.products.length}</h2>
          <div>
            Product Name: <input type="text" ref="keyword" />
            &nbsp;
            <button name="btn" onClick={this.handleSearch.bind(this)}>
              Search
            </button>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-1">Number</div>
              <div className="col-sm-3">Name</div>
              <div className="col-sm-2">Photo</div>
              <div className="col-sm-2">Price (AED)</div>
              <div className="col-sm-2">Quantity</div>
              <div className="col-sm-2">Total Amount</div>
            </div>
            {this.state.products.map(function(p, index) {
              return (
                <div className="row" key={p.id}>
                  <div className="col-sm-1">{p.id}</div>
                  <div className="col-sm-3">{p.name}</div>
                  <div className="col-sm-2">{p.photo}</div>
                  <div className="col-sm-2">{p.price}</div>
                  <div className="col-sm-2">{p.quantity}</div>
                  <div className="col-sm-2">{p.price * p.quantity}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Product;

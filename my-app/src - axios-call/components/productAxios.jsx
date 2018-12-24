import React, { Component } from "react";

// export class myProduct{
//     "id": String;
//     name:string;
//     photo:string;
//     price:string;
//     quantity:string;
//     dateOfManufacturing:string;
// };

//catch the response error in better way,
//by using componentDidCatch();
class ProductAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      products: [
        {
          id: "",
          name: "",
          photo: "",
          price: "",
          quantity: "",
          dateOfManufacturing: ""
        }
      ]
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
        //myProduct = data;
        //console.log('MyProduct:',myProduct);
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
        //since it returns one row, so put this into [],
        //so that array.map() return the response.
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
          <h2>Product By Axios Listing</h2>
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

export default ProductAxios;

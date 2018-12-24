import React, { Component } from "react";
import "./App.css";
//import Person from "./components/person";
//import Product from "./components/product";
//import ProductAxios from "./components/productAxios";
//import UserAxios from "./components/UserAxios";
import Employee from "./components/employee";

class App extends Component {
  render() {
    return (
     <div>
       <Employee />
     </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//      <div>
//        <UserAxios />
//      </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//      <div>
//        <ProductAxios />
//      </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//      <div>
//        <Product />
//      </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//      <div>
//        <Person />
//      </div>
//     );
//   }
// }

export default App;

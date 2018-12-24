import React, { Component } from "react";
import axios from "axios";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      empId: null,
      name: null,
      employee: []
    };
  }

  componentDidMount() {
    axios
      .get("http://NB3121721314:8090/fu/sboot/emps")
      .then(res => {
        //console.log("first response:", res);
        return res.data;
      })
      .then(data => {
        //console.log("data:", data);
        this.setState({
          employee: data
        });
      })
      .catch(error => {
        console.log("Error fetching list WS:", error);
      });
  }

  handleSearch() {
    let keyword = this.refs.keyword.value;
    console.log("search clicked: id:", keyword + ":");
    let appUrl = "http://NB3121721314:8090/fu/sboot";
    if (keyword !== null && keyword !== "") {
      if( isNaN(keyword)){
        alert('Please enter correct number only.');
        return;
      }
      appUrl += "/emp/" + keyword;
    } else {
      appUrl += "/emps";
    }
    console.log("appUrl:", appUrl);
    axios
      .get(appUrl)
      .then(res => res.data)
      .then(data => {
        //since it returns one row, so put this into [],
        //so that array.map() return the response.
        console.log("data:", this.state.employee);
        if (data !== null && data !== "") {
          if (data.length === undefined || data.length === 1) {
            this.setState({
              employee: [data]
            });
          } else {
            this.setState({
              employee: data
            });
          }
        } else {
          alert("No data found.");
          this.setState({
            employee: []
          });
        }
      })
      .catch(error => {
        console.log("Error fetching serach by id WS:", error);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit clicked: ", e.target);
    let { name, value } = e.target;
    console.log("name:", name + ", value:", value);

    //console.log("e.target-empId: ",e.target.props.getElementById("empId"));

    let empId = this.state.empId;
    console.log("empId: ", empId);
    let names = this.state.name;
    console.log("name: ", names);
    //console.log("e.target, " +e.target.props.state.name);
    let createdDate = new Date();
    console.log("createdDate: " + createdDate);
    let input = {
      id: empId,
      name: names,
      createdDate: createdDate
    };
    //console.log('input:',input);
    //let stringfy = JSON.stringify(input);
    //console.log('JSON.stringify(input):'+stringfy);
    let url = "http://NB3121721314:8090/fu/sboot/emp/create";
    let head = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    axios
      .post(url, input, head)
      .then(res => {
        //console.log('response:',res);
        return res.data;
      })
      .then(data => {
        //since it returns one row, so put this into [],
        //so that array.map() return the response.
        //console.log('data:',data);
        if (data !== null && data !== "") {
          this.setState({
            employee: data
          });
        } else {
          this.setState({
            employee: []
          });
        }
      })
      .catch(error => {
        console.log("Error fetching serach by id WS:", error);
      });
  };

  handleChange = e => {
    //console.log("on change :e.target:"+e.target);
    e.preventDefault(); //will not refresh the page by submit clicking
    // let { name, value } = e.target;
    // console.log("name:", name + ", value:", value);
    // this.state.empId = (name === 'empId') ? value : '';
    // this.state.name  = ( name === 'name') ? value : '';
    // if (name === "empId") {
    //   this.state.empId = value;
    // }
    // if (name === "name") {
    //   this.state.name = value;
    // }

    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete(e) {
    console.log("button delete clicked", e);
    //try {
    //  e.preventDefault();
    //  console.log('id:', e.target.value);
    // } catch (error) {
    //   this.setState({ error });
    // }
    let appUrl = "http://NB3121721314:8090/fu/sboot/emp/delete/" + e.id;

    console.log("appUrl:", appUrl);
    axios
      .put(appUrl)
      .then(res => res.data)
      .then(data => {
        //since it returns one row, so put this into [],
        //so that array.map() return the response.
        console.log("button delete clicked", data);
        if (data !== null && data !== "") {
          this.setState({
            employee: data
          });
        } else {
          console.log("No data found.");
          this.setState({
            employee: []
          });
        }
      })
      .catch(error => {
        console.log("Error fetching serach by id WS:", error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Create Employee</h2>
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)} noValidate>
            <div className="form-group">
              <div className="col-sm-5">Emp ID:</div>
            </div>
            <div className="form-group">
              <div className="col-sm-5">
                <input
                  type="text"
                  name="empId"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-5">Name:</div>
            </div>
            <div className="form-group">
              <div className="col-sm-5">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-5">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </div>
            </div>
          </form>
        </div>
        <br />
        <div>
          Person ID: <input type="text" ref="keyword" />
          &nbsp;
          <button name="btn" onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </div>
        <h2>Employee Listing</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">ID</div>
            <div className="col-sm-2">Name</div>
            <div className="col-sm-4">Created Date</div>
            <div className="col-sm-2">Delete</div>
          </div>
          {this.state.employee.map((p, index) => {
            return (
              <div className="row" key={p.id}>
                <div className="col-sm-2">{p.id}</div>
                <div className="col-sm-2">{p.name}</div>
                <div className="col-sm-4">{p.createdDate}</div>
                <div className="col-sm-2">
                  <button
                    type="button"
                    onClick={this.handleDelete.bind(this, p)}
                  >
                    del
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Employee;

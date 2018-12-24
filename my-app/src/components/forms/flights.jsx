import React, { Component } from "react";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: "",
      toDateTime: "",
      classType: "",
      sex: "",
      language: "",
      formErrors: {
        fromDate: "",
        toDateTime: "",
        classType: "",
        sex: "",
        language: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    console.log("on input change");
    //e.preventDefault(); //will not refresh the page by submit clicking
    let { name, value } = e.target;
    console.log("name:", name + ", value:", value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    console.log("on input clicked");
    let { name, value } = e.target;
    console.log("name:", name + ", value:", value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("on form submit");
    console.log("state values:", JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="container">
        <div className="container">
          <h1>Insert Flight Details</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="fromdate">From Date: </label>
              <input
                type="date"
                name="fromDate"
                placeholder="From Date"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="toDateTime">To Date Time: </label>
              <input
                type="datetime-local"
                name="toDateTime"
                placeholder="To Date Time"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sell">Select Class:</label>
              <select
                className="form-control"
                id="sel1"
                name="classType"
                onChange={this.handleChange}
              >
                <option value="">--Select--</option>
                <option value="economy">Economy</option>
                <option value="first">First Class</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="Personal">Personal Info:</label>
            </div>

            <div className="form-inline">
              <label htmlFor="sex">Sex: &nbsp;</label>
              <div className="radio-inline">
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    onClick={this.handleClick}
                  />
                  Male &nbsp;
                </label>
              </div>
              <div className="radio-inline">
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    onClick={this.handleClick}
                  />
                  Female
                </label>
              </div>
            </div>

            <br />
            <div className="form-group">
              <label htmlFor="continent">Language: &nbsp;</label>
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  value="arabic"
                  name="language"
                  onClick={this.handleClick}
                />
                Arabic &nbsp; &nbsp;
              </label>
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  value="english"
                  name="language"
                  onClick={this.handleClick}
                />
                English &nbsp; &nbsp;
              </label>
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  value="hindi"
                  name="language"
                  onClick={this.handleClick}
                />
                Hindi &nbsp; &nbsp;
              </label>
              <label className="checkbox-inline">
                <input
                  type="checkbox"
                  value="urdu"
                  name="language"
                  onClick={this.handleClick}
                />
                Urdu &nbsp; &nbsp;
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Flights;

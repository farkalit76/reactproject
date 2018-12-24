import React, { Component } from "react";
import "../App.css";

const emailRegexp = RegExp(/\S+@\S+\.\S+/);

const formValid = ({ formErrors, ...rest }) => {
  let isValid = true;

  //validate form error being empty
  Object.values(formErrors).forEach(val => {
    //alert(val.length > 0);
    val.length > 0 && (isValid = false);
  });

  //validate the forms field field
  Object.values(rest).forEach(val => {
    val === null && (isValid = false);
  });
  console.log("isValid:", isValid);
  return isValid;
};

class Accounts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    console.log("on submit");
    e.preventDefault(); //will not refresh the page by submit clicking
    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            FirstName : ${this.state.firstName}
            LastName : ${this.state.lastName}
            Email : ${this.state.email}
            Password : ${this.state.password}
        `);
    } else {
      console.error("Form invalid- display error message");
    }
  };

  handleChange = e => {
    //console.log("on change");
    e.preventDefault(); //will not refresh the page by submit clicking
    let { name, value } = e.target;
    console.log("name:", name + ", value:", value);
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "miminum 3 charachters required."
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "miminum 3 charachters required."
            : "";
        break;
      case "email":
        formErrors.email = emailRegexp.test(value)
          ? ""
          : "Invalid email adress";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && value.length > 0
            ? "miminum 6 charachters required."
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleClick() {
    console.log("on click");
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container">
        <div className="container">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate method="post">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={
                  formErrors.firstName.length > 0
                    ? "form-error"
                    : "form-control"
                }
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <font color="red"> {formErrors.firstName}</font>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <font color="red"> {formErrors.lastName}</font>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address: </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <font color="red"> {formErrors.email}</font>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <font color="red"> {formErrors.password}</font>
              )}
            </div>

            <div className="form-inline">
              <label htmlFor="sex">Sex: &nbsp;</label>
              <div class="radio-inline">
                <label>
                  <input type="radio" name="sex" value="male" checked />
                  Male &nbsp;
                </label>
              </div>
              <div class="radio-inline">
                <label>
                  <input type="radio" name="sex" value="female" />
                  Female
                </label>
              </div>
            </div>
            <div>
                <label htmlFor="continent">Language: &nbsp;</label>
                <label class="checkbox-inline"><input type="checkbox" value="af" />Arabic</label>&nbsp;
                <label class="checkbox-inline"><input type="checkbox" value="as" checked />English</label>&nbsp;
                <label class="checkbox-inline"><input type="checkbox" value="am" />Hindi</label>&nbsp;
                <label class="checkbox-inline"><input type="checkbox" value="er" />Urdu</label>&nbsp;
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleClick(this)}
              >
                Create Account
              </button>
            </div>
            <div>
              <small>Already have an account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Accounts;

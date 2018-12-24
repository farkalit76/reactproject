import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App- Constructor");
  }

  componentDidMount() {
    console.log("App- Mounted");
  }

  handleDelete = counterId => {
    console.log("handleDelete clicked", counterId);
    //console.log(this.state.counters);
    //const counters = this.state.counters.filter(function(c, counterId) { return c.id !== counterId; });
    const counters = this.state.counters.filter(c => c.id !== counterId );
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //cloning counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone counter object
    counters[index].value++;
    //console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("handleReset clicked");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App- Render");
    return (
      <div>
        <Navbar
          totolCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="containers">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;

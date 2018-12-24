import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  // constructor(props) {
  //   super(props);
  //   //console.log('this constructor',this);
  //   this.handlIncrement = this.handlIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <h2>There is no tags!</h2>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handlIncrement() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  //When component is Updated
  componentDidUpdate(prevProps, prevState){
    //console.log("prevProps:", prevProps);
    //console.log("prevState:", prevState);
    if( prevProps.counter.value !== this.props.counter.value )
    {
      //do something
    }
  }

  //When component is removed from a DOM
  componentWillUnmount(){
    console.log("Counter- Unmount");
  }

  render() {
    console.log("Counter- Render");
    return (
      <div>
        [Counter #{this.props.counter.id}]
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="but btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    //console.log('formatCount:',this.props.counter.value);
    const values = this.props.counter.value;
    //console.log('values:', values);
    return values === 0 ? "ZERO" : values;
  }

  getBadgeClass() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;

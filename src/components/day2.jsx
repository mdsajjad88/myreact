import React, {Component} from "react";

class MyCar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: props.color || "red",
        count: 0,
      };
    }
    increment = () => {
        this.setState(prevState => ({
          count: prevState.count + 1,
        }));
      };
    render() {
      return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <h2>I am a Car {this.state.color} from day2!</h2>;
      </div>
      )
    }
    
  }
export default MyCar;
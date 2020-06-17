import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        length:null
    }

  inputChangeHandler=(event)=>{
        const inputValue = event.target.value;
        const lengthOfInput = inputValue.length;
        this.setState({
              length:lengthOfInput
          })
  }

  render() {
    return (
      <div className="App">
          <h2>
              <input type={"text"} onChange={this.inputChangeHandler}/>
              <p> The length of the input is : {this.state.length}</p>
          </h2>
      </div>
    );
  }
}

export default App;

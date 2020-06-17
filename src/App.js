import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

    state = {
        userInput: '',
        length: null
    }

  inputChangeHandler= (event) =>{
        //this.setState({userInput: event.target.value});
        const inputValue = event.target.value;
        const lengthOfInput = inputValue.length;
        this.setState({
              userInput:inputValue,
              length:lengthOfInput
          });
  }

  deleteCharHandler = (index) => {
        // the below statement will convert a string into an array
        const text = this.state.userInput.split('');
        text.splice(index,1);
        //the below statement will convert the array back to string
        const updatedText = text.join('');
        this.setState({
            userInput:updatedText
        });

  }

  render() {

    const charList = this.state.userInput.split('').map(ch, index => {
        return <CharComponent character={ch} key = {index}  clicked={() => this.deleteCharHandler(index)}/>

    })
    return (
      <div className="App">
          <h2>
              <input type={"text"} onChange={this.inputChangeHandler} value={this.state.userInput}/>
              <p>{this.state.userInput}</p>
              <ValidationComponent inputLength ={this.state.length}/>
              {charList}
              {/*<CharComponent boxit = {this.state.userInput}/>*/}
          </h2>
      </div>
    );
  }
}

export default App;

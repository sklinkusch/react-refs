import React from 'react';
import Input from './Input'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputField = React.createRef()
    this.state = {
      uppercase: false
    }
  }
  toggle = () => {
    const text = this.inputField.current.value
    const newText = this.state.uppercase ? text.toLowerCase() : text.toUpperCase()
    this.inputField.current.value = newText
    this.setState((prevState) => ({ uppercase: !prevState.uppercase }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input inputField={this.inputField} toggle={this.toggle} />
        </header>
      </div>
    );
  }
}


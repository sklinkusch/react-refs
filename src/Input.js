import React from 'react'

export default class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.props.inputField}></input>
        <button onClick={this.props.toggle}>Toggle Case</button>
      </React.Fragment>
    )
  }
}

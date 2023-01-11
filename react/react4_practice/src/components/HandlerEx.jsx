import React, { Component } from 'react'

export default class HandlerEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hello World!",
        };
      }
      
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={() => this.setState({ value: 'Goodbye World!' })}>클릭</button>
      </div>    
    )
  }
}

import React, { Component } from 'react'

export default class HandlerEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hello World!",
        };
      }
      
  render() {
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <button onClick={() => this.setState({ value: 'Goodbye World!' })}>클릭</button>
      </div>    
    )
  }
}

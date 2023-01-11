import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    const name = "고래"
    const myStyle ={
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px"
    }
    return (
      <div style={myStyle}>{name}</div>
    )
  }
}

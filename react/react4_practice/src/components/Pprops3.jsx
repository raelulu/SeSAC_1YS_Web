import React, { Component } from 'react'

export default class Pprops3 extends Component {
  render() {
    const {text , valid} =this.props;
//valid도 props 생성해서 해보기.
    return (
        <div>
        <h2>{text}</h2>
        <button onClick= {()=>{
          console.log(valid)
        } }>콘솔 메세지</button>
    </div>
    )
  }
}






 


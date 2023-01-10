import React, { Component } from 'react'

export default class Pprops3 extends Component {
  render() {
    const {text} =this.props;
//valid도 props 생성해서 해보기.
    return (
        <div>
        <h2>{text}</h2>
        <button onClick= {()=>{
            console.log("콘솔 띄우기 성공!")
        } }>콘솔 메세지</button>
    </div>
    )
  }
}






 


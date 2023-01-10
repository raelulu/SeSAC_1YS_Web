import React from 'react'

export default function Test() {
    const name = "고래"
    const myStyle = {
        backgroundColor:"blue",
        color: "orange",
        fontSize: "40px",
        padding: "12"
    }
    
  return (
    <div style={myStyle}>{name}</div>
  )

  }
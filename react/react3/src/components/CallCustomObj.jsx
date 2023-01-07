import React from 'react'
import CustomObj from './CallCustomObj'

export default function CallCustomObj() {
    const pororoObj = {
        name: '뽀로로',
        age: '5',
        nickName: '사고뭉치'
    }
  return (
    <div>
        <CustomObj objArr ={pororoObj} />
    </div>
  )
}

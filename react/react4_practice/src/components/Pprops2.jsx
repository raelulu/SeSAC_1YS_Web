import React from 'react'
import img from '../bestseller.png'

export default function Pprops2(props) {
    const {title,author, price,type}= props;

  return (
    
        <div className='bestS'>
        <h1 className='mainT'>이번주 베스트 셀러</h1>
        <img src={img} alt="베스트셀러"></img>
        <h2>{title}</h2>
        <div className='bestC'>저자: {author}</div>
        <div className='bestC'>판매가: {price}</div>
        <div className='bestC'>구분: {type}</div>
        </div>
    
  )
}

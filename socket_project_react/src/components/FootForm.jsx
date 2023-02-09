import React from 'react'
import './FootForm.css'

export default function FootForm() {
  return (
    <div>  
       <form id="chatForm">
                <input type="text" autocomplete="off" size="30" id="message" placeholder="메시지를 입력하세요"></input>
                <input type="submit" value="보내기"></input>
            </form>
       
    </div>
  )
}

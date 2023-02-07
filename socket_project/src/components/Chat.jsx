import React from 'react'
import './Chat.css'

export default function Chat() {
  return (
<>
<div>
<div id="chatHeader">Everyone</div>
            <div id="chatLog">
                <div class="anotherMsg">
                    <span class="anotherName">Jo</span>
                    <span class="msg">Hello, Nice to meet you.</span>
                </div>
                <div class="myMsg">
                    <span class="msg">Nice to meet you, too.</span>
                </div>
            </div>
</div>
</>
  )
}
import React from 'react'
import './Chat.css'

export default function Chat() {
  return (
<>
<div>
<div id="chatHeader">Everyone</div>
            <div id="chatLog">
                <div class="anotherMsg">
                    <span class="anotherName">Gorae</span>
                    <span class="msg">안녕? 반가워</span>
                </div>
                <div class="myMsg">
                    <span class="msg">나도 반가워!</span>
                </div>
            </div>
</div>
</>
  )
}
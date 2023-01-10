import { useState } from "react"

export default function EventEx() {
    const [info, setInfo] =useState(    
    [
        {  name: '코디',
            email:'codi@gmail.com'
        },
        {
            name: '윤소희',
            email:'yoonsohee@gmail.com'
        }]
    )
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


        

  return (
    <div>
        <input type="text" name="name" placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" name="email" placeholder="이메일" value={email}onChange={(e)=>{setEmail(e.target.value)}}/>
        <button onClick={()=>{setInfo(info.concat({name: name, email: email})) 
    setName('')
    setEmail('')
    }}>등록</button>
    {info.map((element, i)=>{return <h2 key= {i}>{element.name}: {element.email}</h2>})}
    </div>
  )
}

import logo from './logo.svg';
import './App.css';
import { useState, useTransition, useDeferredValue } from 'react';

function App() {
  // let [teacher, setTeacher] = useState('이효석');
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  // function customSetTeacher(name) {
  //   setTeacher(name);
  //   console.log(teacher);
  // }
  let a = new Array(10000).fill(0);

  return (
    <div className="App">
      {/* <button onClick={() => customSetTeacher('tetz')}>영어로!</button>
      <br />
      <span>{teacher}</span> */}
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      ></input>
      {isPending
        ? '로딩중'
        : a.map(() => {
            return <div>{state}</div>;
          })}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [teacher, setTeacher] = useState('이효석');

  function customSetTeacher(name) {
    setTeacher(name);
    console.log(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => customSetTeacher('tetz')}>영어로!</button>
      <br />
      <span>{teacher}</span>
    </div>
  );
}

export default App;

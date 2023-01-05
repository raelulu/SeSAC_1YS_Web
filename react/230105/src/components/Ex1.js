import { useState } from 'react';

export default function Ex1() {
  const [count, setCount] = useState(0); //초기값 설정0

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

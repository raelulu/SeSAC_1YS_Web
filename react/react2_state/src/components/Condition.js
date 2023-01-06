import React, { useState } from 'react';

export default function Condition() {
  let [num, setTeacher] = useState(0);
  return (
    <div>
      <span>{num}</span>
      <br />
      <button style={{ fontSize: '32px' }} onClick={() => setTeacher(num + 1)}>
        {num < 10 ? '👍' : '😍'}
      </button>
    </div>
  );
}

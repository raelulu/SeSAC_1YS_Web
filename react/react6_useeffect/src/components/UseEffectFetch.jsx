import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000');

    if (resFetch.status !== 200) return alert('통신 에러');

    const data = resFetch.data;
    setDataArr(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            key={el.name}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </div>
  );
}

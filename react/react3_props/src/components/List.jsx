import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      content: 'state 활용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      content: 'lv 0 정복',
    },
    {
      title: '변경확인',
      content: '변경',
    },
  ];
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return <ListChild title={el.title} content={el.content} key={index} />;
      })}
    </div>
  );
}

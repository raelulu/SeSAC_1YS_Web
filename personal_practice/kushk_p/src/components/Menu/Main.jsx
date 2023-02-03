import React, { useState } from 'react';
import styled from 'styled-components';
import First from './First';
import Second from './Second';

const Main = () => {
  const [content, setContent] = useState();

  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <First />,
    second: <Second />,

  };

  console.log(content);

  return (
    <div>
        {MAIN_DATA.map(data => {
          return (
            <Button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
      {content && <Content>{selectComponent[content]}</Content>}
    </div>
  );
};

export default Main;


const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: #111111;
  background-color: #eeeeee;
  border-radius: 2rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const MAIN_DATA = [
  {
  id: 1,
  text: '커피',
  name: 'first',
  },
  {
  id: 2,
  text: '논커피',
  name: 'second',
  },
  ];
  
  
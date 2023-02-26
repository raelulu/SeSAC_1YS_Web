import React, { useState } from "react";
import styled from "styled-components";
import AvailableMenu from "./AvailableMenu";
import Second from "./Second";

const Main = () => {
  const [content, setContent] = useState();

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <AvailableMenu />,
    second: <Second />,
  };

  return (
    <div>
      {MAIN_DATA.map((data) => {
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

//버튼 css수정하기
const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  margin-top: 50px;
  color: #111111;
  background-color: #eeeeee;
  border-radius: 1rem;
`;

const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 50%;
`;

export const MAIN_DATA = [
  {
    id: 1,
    text: "커피",
    name: "first",
  },
  {
    id: 2,
    text: "논커피",
    name: "second",
  },
];

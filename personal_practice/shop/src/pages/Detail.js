import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "../../src/App.css";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

export default function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  let dispatch = useDispatch();

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(찾은상품.id);

    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, []);
  let [count, setCount] = useState(0);

  let [fade2, setFade2] = useState("");
  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return (
    <div className={"container start " + fade2}>
      <div>
        <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
        <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
      </div>

      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="img"
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} 탭={탭} />
    </div>
  );
  function TabContent({ 탭 }) {
    let [fade, setFade] = useState("");

    useEffect(() => {
      setTimeout(() => {
        setFade("end");
      }, 100);
      return () => {
        setFade("");
      };
    }, [탭]);

    return (
      <div className={"start " + fade}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>
    );
  }
}

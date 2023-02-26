import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  // let { id } = useParams();
  //console.log(id);
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    //console.log("안녕");
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);
  let [count, setCount] = useState(0);

  return (
    <div className="container">
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
          <h4 className="pt-5">{props.shoes[0].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

import React, { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, agePlus } from "../store/userSlice.js";
import { changeCount } from "./../store.js";

let Child = memo(function () {
  console.log("재렌더링됨");
  return <div>자식임</div>;
});

export default function Cart() {
  let state = useSelector((state) => state);
  // console.log(state.cart[0].name);

  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h6>
        {state.user.name}
        {state.user.age}의 장바구니
      </h6>
      {/* <button
        onClick={() => {
          dispatch(agePlus(100));
        }}
      >
        버튼
      </button> */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

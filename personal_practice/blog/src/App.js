import { useState } from "react";
import "./App.css";

function App() {
  //서버랑 연결안됐으니 변수로 만들어서.
  let post = "용산 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "맛집추천",
    "카페추천",
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="balck-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        {" "}
        정렬버튼{" "}
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        수정버튼
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

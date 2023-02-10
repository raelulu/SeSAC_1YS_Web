import { useState } from "react";
import "./App.css";

function App() {
  //서버랑 연결안됐으니 변수로 만들어서.
  //let post = "용산 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "맛집추천",
    "카페추천",
  ]);
  //let [thumb, setThumb] = useState(0);
  //let [thumb1, setThumb1] = useState(0);
  //let [thumb2, setThumb2] = useState(0);
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //UI의 현재상태를 state로 저장
  return (
    <div className="App">
      <div className="balck-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        정렬버튼
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
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              setThumb(thumb + 1);
            }}
          >
            👍
          </span>
          {thumb}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* {1 == 2 ? "맞음" : "아님"} */}
      {/* {modal == true ? <Modal /> : null} */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...thumb];
                  copy[i] = copy[i] + 1;
                  setThumb(copy);
                }}
              >
                👍
              </span>
              {thumb[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
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

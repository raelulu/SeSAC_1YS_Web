import logo from "./logo.svg";
import "./App.css";

function App() {
  const helloStr = "Hello, first excercise";
  const inlineStyle = { marginTop: "32px", backgroundColor: "skyblue" };

  return (
    <div className="App">
      <div
        style={inlineStyle}
        onClick={() => {
          alert("클릭 됨");
        }}
      >
        {helloStr}
      </div>
    </div>
  );
}

export default App;

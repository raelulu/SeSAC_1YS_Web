import logo from "./logo.svg";
import "./App.css";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";

function App() {
  return (
    <div className="App">
      <div>
        <ImgComponent />
      </div>
      <BtnToNaver />
    </div>
  );
}

export default App;

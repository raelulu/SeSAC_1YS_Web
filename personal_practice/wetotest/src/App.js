import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Challenge from "./pages/Challenge.jsx";
import Crew from "./pages/Crew.jsx";
import Recommendation from "./pages/Recommendation.jsx";
import Login from "./pages/Login.jsx";
import Join from "./pages/Join.jsx";
import { useSelector } from "react-redux";
import CrewCreate from "./components/crew/CrewCreate.jsx";

function App() {
  const state = useSelector((state) => state.modalReducer);
  const { isLoginModal } = state;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
      {isLoginModal && <CrewCreate />}
    </div>
  );
}

export default App;

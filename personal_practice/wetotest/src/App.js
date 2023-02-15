import { Route, Routes } from "react-router-dom";
import Crew from "./components/Crew.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/crew" element={<Crew />} />
    </div>
  );
}

export default App;

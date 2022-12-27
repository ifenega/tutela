import Home from "./components/Home/Home";
import Riders from "./components/Riders/Riders";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riders" element={<Riders />} />
      </Routes>
  );
}

export default App;

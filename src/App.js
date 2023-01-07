import Home from "./components/Home/Home";
import Riders from "./components/Riders/Riders";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riders" element={<Riders />} />
        <Route path="/protection-plan" element={<Shop />} />
      </Routes>
  );
}

export default App;

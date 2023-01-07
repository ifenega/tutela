import Home from "./components/Home/Home";
import Riders from "./components/Riders/Riders";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Office from "./components/Office/Office";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riders" element={<Riders />} />
        <Route path="/shop-protection-plan" element={<Shop />} />
        <Route path="/office-protection-plan" element={<Office />} />
      </Routes>
  );
}

export default App;

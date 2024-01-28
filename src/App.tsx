import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Navbar from "./components/Navbar";
import AllVehicle from "./screen/AllVehicle";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/allVehicle" element={<AllVehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

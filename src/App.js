import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Country } from "./pages/Country/Country";
import { Destination } from "./pages/Destination/Destination";
import { DestinationDetail } from "./pages/DestinationDetail/DestinationDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/continent/:continentName" element={<Country />} />
      <Route path="/country/:countryName" element={<Destination />} />
      <Route path="/destination/:destinationName" element={<DestinationDetail />} />
    </Routes>
  );
}

export default App;

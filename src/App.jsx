import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DayNightContext, LoadingContext } from "./context/Context";
import Home from "./pages/Home/Home";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  const [loading, setLoading] = useState(false);
  const [dayNight, setDayNight] = useState(false);
  return (
    <div className={dayNight ? "dark" : ""}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <DayNightContext.Provider value={{ dayNight, setDayNight }}>
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <LoadingScreen />
          )}
        </DayNightContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;

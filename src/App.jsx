import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingContext } from "./context/Context";
import Home from "./pages/Home/Home";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {loading ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <LoadingScreen />
        )}
      </LoadingContext.Provider>
    </>
  );
}

export default App;

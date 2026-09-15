import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ModelDetails from "./pages/ModelDetails";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/model/:id"
          element={<ModelDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
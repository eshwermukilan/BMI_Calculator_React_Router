import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import BMIForm from "./BMIForm.jsx";
import Result from "./Result.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/bmi" element={<BMIForm />} />

        <Route path="/result" element={<Result />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
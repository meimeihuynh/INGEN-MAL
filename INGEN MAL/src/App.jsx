import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
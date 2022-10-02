import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

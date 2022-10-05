import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Aboutus from "./pages/AboutUs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./styles/App.css";
import { data } from "./utils/pathLocations";


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

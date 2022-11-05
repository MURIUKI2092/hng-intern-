import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

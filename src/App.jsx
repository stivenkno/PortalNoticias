import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Componente para la página principal
import Nav from "./components/Nav";
import Details from "./components/Details";
import Categories from "./components/Categories";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;

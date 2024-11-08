import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Componente para la página principal
import Nav from "./components/Nav";
import Details from "./components/Details";
import Categories from "./components/Categories";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route
          path="/search/:searchArticle"
          element={<Search />}
          key="search"
        />
      </Routes>
    </Router>
  );
};

export default App;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchArticle, setSearchArticle] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    // Navegar a la categoría seleccionada
    navigate(`/categories/${category}`);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    if (searchArticle.trim()) {
      navigate(`/search/${searchArticle}`);
    }
  };

  return (
    <nav className="bg-blue-950 p-4 w-full px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <Link
          to="/"
          className="text-white hover:text-gray-200 px-2 py-1 text-xl font-extrabold"
        >
          NEWS KNO
        </Link>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0">
          <Link to="/" className="text-white hover:text-gray-200 px-2 py-1">
            Home
          </Link>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="category" className="text-white mx-2">
              Category:
            </label>
            <select
              className="px-3 py-2 rounded-md text-gray-700 focus:outline-none"
              id="category"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="general">general</option>
              <option value="entertainment">entertainment</option>
              <option value="business">business</option>
              <option value="health">health</option>
              <option value="science">science</option>
              <option value="sports">sports</option>
              <option value="technology">technology</option>
            </select>
          </form>

          <form className="flex mt-4 md:mt-0" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar..."
              className="px-3 py-2 rounded-l-md text-gray-700 focus:outline-none"
              value={searchArticle}
              onChange={(e) => setSearchArticle(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-3 py-2 rounded-r-md hover:bg-gray-200 focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

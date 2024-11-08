import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";

function Nav() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [initialRender, setInitialRender] = useState(true);
  const [searchArticle, setSearchArticle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Solo navega si no es el primer renderizado y hay una categoría seleccionada
    if (!initialRender && selectedCategory) {
      navigate(`categories/${selectedCategory}`);
    } else {
      setInitialRender(false); // Marca que el primer renderizado ha pasado
    }
  }, [selectedCategory, navigate, initialRender]);

  return (
    <nav className="bg-blue-950 p-4 w-full px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-lg font-semibold">Mi Página</div>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0">
          <Link
            to="#inicio"
            className="text-white hover:text-gray-200 px-2 py-1"
          >
            Inicio
          </Link>

          <form>
            <label htmlFor="category" className="text-white mx-1">
              Categoria:
            </label>
            <select
              className="px-3 py-2 rounded-md text-gray-700 focus:outline-none"
              id="category"
              name="category"
              onChange={(e) => {
                setSelectedCategory(e.target.value); // Actualiza el estado
              }}
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

          <form className="flex mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-3 py-2 rounded-l-md text-gray-700 focus:outline-none"
              onChange={(e) => {
                setSearchArticle(e.target.value); // Actualiza el estado
              }}
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-3 py-2 rounded-r-md hover:bg-gray-200 focus:outline-none"
              onClick={() => {
                navigate(`search/${searchArticle}`);
              }}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

import { useState, useEffect } from "react";

export default function SearchResults({ data }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(data.articles);
  }, [data]);

  const handleClick = (actualArticle) => {
    console.log("Articulo Seleccionado: ", actualArticle);
  };

  return (
    <>
      <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((articles, index) => (
          <div
            className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
            onClick={() => handleClick(articles)}
          >
            <img
              className="w-full h-48 object-cover "
              src={articles.urlToImage}
              alt={articles.title}
              loading="lazy"
            />
            <h2 className="text-xl font-semibold mt-4">{articles.title}</h2>
            <p className="text-gray-600 mt-2">{articles.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

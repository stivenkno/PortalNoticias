import { Navigate } from "react-router-dom";

export default function Articles({ data }) {
  const handleClick = (actualArticle) => {
    console.log("Articulo Seleccionado: ", actualArticle);
  };

  return (
    <>
      <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.articles.map((article, index) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
            onClick={() => handleClick(article)}
          >
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={article.urlToImage}
              alt={article.title}
              loading="lazy"
            />
            <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

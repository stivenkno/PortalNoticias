import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../redux/apiSlice";
import SearchResults from "./SearchResults";

export default function Search() {
  const { searchArticle } = useParams();
  const { data, isLoading, isError } = useGetSearchQuery(searchArticle);

  // Renderizado condicional
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar datos</p>;

  console.log(searchArticle);
  return <SearchResults data={data} />;
}

import { useGetCategoriesQuery } from "../redux/apiSlice";
import { useParams } from "react-router-dom";
import Articles from "./Articles";

export default function Categories() {
  const { category } = useParams();
  const { data, isLoading, isError } = useGetCategoriesQuery(category); // Asegúrate de pasar `category` si es necesario en tu query

  // Renderizado condicional
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar datos</p>;

  return (
    <>
      <Articles data={data} />
    </>
  );
}
import { useGetPostQuery } from "../redux/apiSlice";
import Articles from "./Articles";

const Home = () => {
  // Pasas los parámetros necesarios como un objeto
  const { data, error, isLoading } = useGetPostQuery({
    country: "us",
  });

  if (data) {
    console.log(data);
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Articles data={data} />
    </>
  );
};

export default Home;

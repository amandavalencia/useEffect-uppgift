import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { Movie } from "./Movie";

export const MovieApp = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getData = async () => {
    const response = await axios.get<IMovie[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
    );
    setMovies(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movies);
  
  return (
    <div>
      {movies.map((movie) =>
        <Movie movie={movie} />
      )}
    </div>
  );
};

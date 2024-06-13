import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Movie } from "./Movie";

export const MovieApp = () => {
  const { movies, getData } = useFetch();
  const [inputText, setInputText] = useState("");

  const searchMovie = () => {
    getData(inputText)
  
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={searchMovie}>Sök</button>

      <div>
        {movies.map((movie) => (
          <Movie movie={movie}  key={movie.imdbID}/>
        ))}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import axios from "axios";

export const useFetch = () => { // min hook
  const [movies, setMovies] = useState<IMovie[]>([]); // sparar min movie lista i ett state  

  const getData = async (searchText:string) => {
    const response = await axios.get<IOmdbResponse>(
      "http://www.omdbapi.com/?i=tt3896198&apikey=aa1b7a15&s=" + searchText
    );    
    setMovies(response.data.Search);
    
  };

  useEffect(() => {
    if(movies.length > 0) return; // om min lista av filmer är större än 0 returnera den direkt, om det är tom går den vidare till getMovies som i sin tur triggar getData som hämtar från api
    const getMovies = async (searchText:string) =>{
      await getData(searchText)    
    }
    getMovies("star")
  });

  console.log(movies);
  
  return { movies, getData }
};

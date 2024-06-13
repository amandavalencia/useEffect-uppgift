import { IMovie } from "../models/IMovie";

interface IMovieProps {
  movie: IMovie;
}

export const Movie = ({ movie }: IMovieProps) => {
  return (
    <>
      <div>
        <h3>{movie.Title}</h3>
      </div>
    </>
  );
};

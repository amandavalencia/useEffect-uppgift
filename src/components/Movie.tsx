import { IMovie } from "../models/IMovie";

interface IMovieProps {
  movie: IMovie;
}

export const Movie = ({ movie }: IMovieProps) => {
  return (
    <>
      <div>
        <h3>{movie.name}</h3>
      </div>
    </>
  );
};

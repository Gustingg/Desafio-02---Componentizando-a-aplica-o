import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: MovieProps) {

  return(
    <MovieCard key ={props.imdbID} title={props.Title} poster={props.Poster} runtime={props.Runtime} rating={props.Ratings[0].Value} />
  )
}
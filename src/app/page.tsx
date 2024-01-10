import { Card } from "@/components/card/card";
import * as moviesObject from "@/data/movies.json";
import { FilmType } from "@/data/types";

export default function Home() {
  const movies = moviesObject.movies as FilmType[]
  return (
    <>
      {movies.map((item, index) => {
        return (
          <Card film={item} key={index} />
        )
      }
      )}
      </>
  )
}

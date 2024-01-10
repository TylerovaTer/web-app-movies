"use client"
import { Card } from "@/components/card/card";
import { SortButton } from "@/components/sort-button";
import data from "@/data/movies.json";
import { FilmType } from "@/data/types";
import { useState } from "react";

export default function Home() {
  const [sortedFromNewest, setSortedFromNewest] = useState<boolean>(true)
  const [movieSorted, setMoviesSorted] = useState(data.movies as FilmType[])

  const sorting = () => {
    let sortedArray: FilmType[] = [...movieSorted]
    if (sortedFromNewest) {
      sortedArray.sort((a, b) => parseInt(b.episode_number) - parseInt(a.episode_number))
      setSortedFromNewest(false)
    } else {
      sortedArray.sort((a, b) => parseInt(a.episode_number) - parseInt(b.episode_number))
      setSortedFromNewest(true)
    }
    setMoviesSorted(sortedArray)
  }

  return (
    <>
    <SortButton handleSorting={sorting} latest={sortedFromNewest}/>
      {movieSorted.map((item, index) => {
        return (
          <Card film={item} key={index} />
        )
      }
      )}
      </>
  )
}

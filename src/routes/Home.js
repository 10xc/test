import React, { useEffect, useState } from "react";
import Movie from "../components/Movie"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{

}
`


function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minium_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)

  return (
    <div>
      <GlobalStyle/>
      {loading ? <h1>Loading...</h1> : (
        <div>
          <h1 style={{textAlign:"center", margin:"100px 0px", fontSize:"100px"}}>Movie</h1>
          {movies.map((movie) => (
          <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
          ))}
        </div>
      )}
    </div>
  )
}
export default Home;
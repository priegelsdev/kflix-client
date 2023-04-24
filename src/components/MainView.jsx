import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function MainView() {
  // set state for movies being fetched from API
  const [movies, setMovies] = useState([])

  // fetch movie data
  useEffect(() => {
    fetch("https://troubled-jungle-tabletop.glitch.me/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
      }) 
  }, [])

  console.log(movies)
 
  const movieCardElements = <Container>
    <Row className="row">
      {movies.slice(0, 4).map((movie, index) => {
        return <Col sm={3} key={index}>
          <MovieCard 
            key = {movie.id}
            title = {movie.title}
            description = {movie.description}
          />
        </Col>
      })}
    </Row>
    <Row>
      {movies.slice(4, 8).map((movie, index) => {
        return <Col sm={3} key={index}>
          <MovieCard 
            key = {movie.id}
            title = {movie.title}
            description = {movie.description}
          />
        </Col>
      })}
    </Row>
    <Row>
      {movies.slice(8, 10).map((movie, index) => {
        return <Col sm={6} key={index}>
          <MovieCard 
            key = {movie.id}
            title = {movie.title}
            description = {movie.description}
          />
        </Col>
      })}
    </Row>
  </Container>

  return (
    <>
      {movieCardElements}
    </>
  )
}
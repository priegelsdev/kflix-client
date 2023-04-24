import MovieCard from "./MovieCard";
import movies from "../../data";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export default function MainView() {

  useEffect(() => {
    fetch("https://troubled-jungle-tabletop.glitch.me/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      }) 
  }, [])
 
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
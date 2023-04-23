import MovieCard from "./MovieCard";
import movies from "../../data";
import { Container, Row, Col } from "react-bootstrap";

export default function MainView() {
 
  const movieCardElements = <Container>
    <Row>
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
    <Container>
      {movieCardElements}
    </Container>
  )
}
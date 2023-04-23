import { Card } from "react-bootstrap"

export default function MovieCard() {
  return (
    <Card>
      <Card.Img variant="top" src="https://placehold.co/50x20"/>
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          Description of the movie
        </Card.Text>
        <a href="#">Open</a>
      </Card.Body>
    </Card>
  )
}
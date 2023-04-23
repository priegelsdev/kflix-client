import { Card } from "react-bootstrap"

export default function MovieCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src="https://placehold.co/400x50"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <a href="#">Open</a>
      </Card.Body>
    </Card>
  )
}
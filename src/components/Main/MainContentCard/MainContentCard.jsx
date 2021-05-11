import React from "react";
import { Button, Card } from "react-bootstrap";

const MainContentCard = ({ id, image, title, content }) => {
  return (
    <Card key={id} className="m-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MainContentCard;

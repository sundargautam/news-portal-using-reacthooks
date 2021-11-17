import "./PostCard.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { openInNewTab } from "../../utils/commonUtils";

const Postcard = ({
  key,
  author,
  title,
  description,
  url,
  content,
  urlToImage,
}) => {
  return (
    <>
      <Card className="newscard" style={{ width: "60%" }}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={(e) => openInNewTab(url)}>
            View Original
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Postcard;

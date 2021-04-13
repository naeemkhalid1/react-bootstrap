import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
const Heading = () => {
  return (
    <div className="intialDataHeading">
      <Card
        style={{
          width: "18rem",
          padding: "10px 0 0 0",
          backgroundColor: "green",
        }}
        className="mainCard"
      >
        <Card.Title>
          <span className="headings headingsSTATUS"> COMPLETED</span>
        </Card.Title>
      </Card>
    </div>
  );
};
export default Heading;

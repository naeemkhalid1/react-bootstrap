import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
const Heading = ({ data }) => {
  return (
    <div className="intialDataHeading">
      <Card
        style={{ width: "18rem", padding: "10px 0 0 0" }}
        className="mainCard"
      >
        <Card.Title className="headings">
          <span className="headings"> IN-PROCESS </span>
          <span className="head">{data}</span>
        </Card.Title>
      </Card>
    </div>
  );
};
export default Heading;

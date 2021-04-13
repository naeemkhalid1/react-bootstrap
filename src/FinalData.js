import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./intialData.css";

class FinalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  }

  render() {
    // const renderdata = (tasks) => {
    const { identityitem, img, name, priority } = this.props;
    return (
      <div className="intial_data">
        <Card
          style={{ width: "18rem", height: "9rem" }}
          className="main_Card extraClass"
          key={identityitem}
        >
          <Card.Body style={{ background: "rgb(224, 235, 235)" }}>
            <Card.Title style={{ background: "white", border: "5px" }}>
              {name}
            </Card.Title>
            <Card.Text className="paragraphClass">
              {priority}
              <span style={{ color: "green", fontSize: "15px" }}>
                {" "}
                Visit({img})
              </span>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>Final Data will be here</ListGroupItem>  */}
          </ListGroup>
        </Card>
      </div>
    );
    // };

    // return (

    //     {/* <Heading/> */}
    //     {this.props.map(renderdata)}

    // );
  }
}

export default FinalData;

import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PendingData from "./PendendData";
import FinalData from "./FinalData";
import "./intialData.css";

const Heading = () => {
  return (
    <Card
      style={{ width: "18rem", padding: "10px 0 0 0" }}
      className="mainCard intialDataHeading"
    >
      <Card.Title>
        <span className="headings"> USER REQUESTS</span>
      </Card.Title>
    </Card>
  );
};

class IntialData extends Component {
  constructor(props) {
    super(props);
    this.state = { newid: this.props.identity, seconid: "" };
    // this.hide=this.hide.bind(this);
  }
  // hide(){

  //     this.setState({
  //         showData:this.state.id,
  //     })

  // }
  settngstate() {
    //  this.setState ({seconid:this.state.newid});
  }

  render() {
    const {
      identity,
      hospital,
      img,
      name,
      hide,
      showData,
      priority,
      onUpdate,
    } = this.props;

    return (
      <div className="intial_data" key={identity}>
        {/* <Heading/> */}
        <Card
          style={{ width: "18rem", height: "10rem" }}
          className="mainCard extraClass"
          key={identity}
        >
          {/* <Card.Img style={{width:'50%',height:'50%',margin:'0 auto'}} variant="top" src={img} /> */}

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {identity} | {priority} | {hospital}
              <span style={{ color: "green", fontSize: "15px" }}>({img})</span>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <div className="itemss">
                <Button
                  onClick={() => {
                    showData(identity);
                    // onUpdate();
                  }}
                >
                  Process
                </Button>
                <Button
                  onClick={() => hide(identity)}
                  style={{ background: "red" }}
                >
                  DECLINE
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default IntialData;

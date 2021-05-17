import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./intialData.css";
import FinalData from "./FinalData";

class PendingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props,
      showState: "",
    };
    // this.showCompleteData = this.showCompleteData.bind(this);
  }
  // dataHolder(){
  //     const tempvar=this.props.PendingData;
  //     console.log("tempcar",tempvar);
  // }
  //   showCompleteData(clickedId) {
  //     this.state.item.filter((filterItems) => {
  //       if (filterItems.id === clickedId) {
  //         // temparray.push({id:filterItems.id, img:filterItems.img, userName:filterItems.userName,},);
  //         this.setState({
  //           showState: [
  //             ...this.state.showState,
  //             {
  //               id: filterItems.id,
  //               img: filterItems.img,
  //               userName: filterItems.userName,
  //             },
  //           ],
  //         });
  //       }
  //     });
  //     const currentIt = this.state.item.filter(
  //       (filterItems) => filterItems.id !== clickedId
  //     );
  //     this.setState({ item: currentIt });
  //   }

  render() {
    const { identityitem, img, name, showCompleteData, priority } = this.props;
    // console.log("pending Data", this.props);
    return (
      <div className="intial_data" key={identityitem}>
        <Card
          style={{ width: "18rem", height: "10rem" }}
          className="mainCard extraClass"
          key={identityitem}
        >
          {/* <Card.Img
            style={{ width: "50%", height: "50%", margin: "0 auto" }}
            variant="top"
            src={img}
          /> */}

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {identityitem} | {priority} |
              <span style={{ color: "green", fontSize: "15px" }}>({img})</span>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {" "}
              <Button
                onClick={() => showCompleteData(identityitem)}
                style={{ background: "gray" }}
              >
                Mark Complete
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
const Heading = () => {
  return (
    <div className="intialDataHeading">
      <Card
        style={{ width: "18rem", padding: "10px 0 0 0" }}
        className="mainCard"
      >
        <Card.Title>
          <span className="headings"> TASKS IN PROCESSING</span>
        </Card.Title>
      </Card>
    </div>
  );
};

export default PendingData;

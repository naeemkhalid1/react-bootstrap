import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PendingData from "./PendendData";
import FinalData from "./FinalData";
import axios from "axios";
import TableData from "./dbTable";
import UsersData from "./usersTableData";
import IntialData from "./IntialData";
import IntialHeading from "./Headings/intialHeading";
import PendingHeading from "./Headings/pendingHeading";
import FinalHeading from "./Headings/finalHeading";
import "./ComponentsData.css";

class ComponentsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        { id: 1, img: "./avatar.png", userName: "Ahmed", queuestate: "intial" },
        // {
        //   id: 2,
        //   img: "./img_avatar.png",
        //   userName: "yasir",
        //   queuestate: "intial",
        // },
        // { id: 3, img: "./boy.png", userName: "khan", queuestate: "intial" },
      ],
      showState: [],
      completeStatus: [],
    };
    this.hide = this.hide.bind(this);
    // this.hidecomplete = this.hidecomplete.bind(this);
    this.showData = this.showData.bind(this);
    this.showTable = this.showTable.bind(this);
    this.showCompleteData = this.showCompleteData.bind(this);
  }
  hide(id) {
    const currentItems = this.state.item.filter(
      (filterItems) => filterItems.id !== id
    );
    this.setState({ item: currentItems });
    const currentShowItems = this.state.showState.filter(
      (filterItems) => filterItems.id !== id
    );
    this.setState({ showState: currentShowItems });
  }
  //   hidecomplete(id) {}
  postApiCall = async (url, data) => {
    console.log("post data 1: ", data);
    console.log("post data: ", url);

    let response = await axios({
      method: "GET",
      url,
      data: { data },
      headers: { "content-type": "application/json" },
      // data: data,
    });
    console.log("response  post= ", response);
    // alert("called");
  };
  showData(clickedId) {
    this.state.item.filter((filterItems) => {
      if (filterItems.id === clickedId) {
        // temparray.push({id:filterItems.id, img:filterItems.img, userName:filterItems.userName,},);
        this.setState({
          showState: [
            ...this.state.showState,
            {
              id: filterItems.id,
              img: filterItems.img,
              userName: filterItems.userName,
            },
          ],
        });
      }
    });
    const currentIt = this.state.item.filter(
      (filterItems) => filterItems.id !== clickedId
    );
    this.setState({ item: currentIt });
    // var postApiUrl = "http://localhost:3000/queue";
    // this.postApiCall(postApiUrl,)
  }

  showCompleteData(clickedId) {
    this.state.showState.filter((filterItems) => {
      if (filterItems.id === clickedId) {
        // temparray.push({id:filterItems.id, img:filterItems.img, userName:filterItems.userName,},);
        this.setState({
          completeStatus: [
            ...this.state.completeStatus,
            {
              id: filterItems.id,
              img: filterItems.img,
              userName: filterItems.userName,
            },
          ],
        });
      }
    });
    const currentIt = this.state.showState.filter(
      (filterItems) => filterItems.id !== clickedId
    );
    this.setState({ showState: currentIt });
  }
  showTable() {
    return <TableData />;
  }
  render() {
    this.state.item.map((item) => {
      if (item.id == 1) {
        console.log("itemId", item.id);
        var colItem = item.queuestate;
        var postApiUrl = "http://localhost:3000/queue/3";
        this.postApiCall(postApiUrl, colItem);
      }
    });
    return (
      <div className="topclass">
        <Heading />
        <div className="headingsName">
          <IntialHeading />

          <FinalHeading />
          <PendingHeading />
        </div>
        <div className="components">
          <div className="componentsInner">
            {this.state.item.map((items) => {
              return (
                <IntialData
                  identity={items.id}
                  img={items.img}
                  name={items.userName}
                  hide={this.hide}
                  showData={this.showData}
                />
              );
            })}
          </div>
          <div className="componentsInner">
            {this.state.showState.length > 0
              ? this.state.showState.map((items) => {
                  return (
                    <PendingData
                      identityitem={items.id}
                      img={items.img}
                      name={items.userName}
                      showCompleteData={this.showCompleteData}
                    />
                  );
                })
              : null}
          </div>
          <div className="componentsInner">
            {this.state.completeStatus.length > 0
              ? this.state.completeStatus.map((items) => {
                  return (
                    <FinalData
                      identityitem={items.id}
                      img={items.img}
                      name={items.userName}
                    />
                  );
                })
              : null}

            {/* <FinalData/>  */}
          </div>
        </div>
        <div>
          <UsersData />
        </div>
        <div>
          <TableData />
        </div>
      </div>
    );
  }
}
const Heading = () => {
  return (
    <Card style={{ width: "38rem" }} className="mainCard maincomponentData">
      <Card.Title>
        <h2 className="headingtag"> USERS DATA</h2>
      </Card.Title>
    </Card>
  );
};
export default ComponentsData;

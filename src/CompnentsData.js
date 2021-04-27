import React, { Component } from "react";
import "antd/dist/antd.css";
import ScrollArea from "react-scrollbar";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import PendingData from "./PendendData";
import FinalData from "./FinalData";
import axios from "axios";
import Pagination from "./pagination";
import { BackTop } from "antd";
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
      item: [],
      showState: [],
      completeStatus: [],
      showQueue: "",
      queProcess: "in-Process",
      CompProcess: "Completed",
      // getData: [],
      // currentPage: 1,
      // dataPerPage: 3,
      // render: "",
    };
    this.hide = this.hide.bind(this);
    // this.hidecomplete = this.hidecomplete.bind(this);
    this.showData = this.showData.bind(this);
    // this.pagintionHolder = this.pagintionHolder.bind(this);
    // this.paginate = this.paginate.bind(this);
    this.showTable = this.showTable.bind(this);
    this.putQueueApiCall = this.putQueueApiCall.bind(this);
    this.showUserTable = this.showUserTable.bind(this);
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
  async componentDidMount() {
    const response = await fetch(`http://192.168.1.110:3000/queues`);
    const json = await response.json();
    // this.setState({
    //   getData: json,
    // });

    const waitingItems = json.filter(
      (filterItems) => filterItems.queueState === "Waiting"
    );
    this.setState({ item: waitingItems });
    const inProcessItems = json.filter(
      (filterItems) => filterItems.queueState === "in-Process"
    );
    this.setState({ showState: inProcessItems });
    const completeItems = json.filter(
      (filterItems) => filterItems.queueState === "Completed"
    );
    this.setState({ completeStatus: completeItems });
    // this.pagintionHolder();
  }
  showData(clickedId) {
    const collection = {};
    this.state.item.filter((filterItems) => {
      if (filterItems.id === clickedId) {
        collection.id = filterItems.id;
        collection.hospital = filterItems.hospital;
        collection.queueState = this.state.queProcess;
        collection.notes = filterItems.notes;
        collection.priority = filterItems.priority;
        collection.user = filterItems.user;
        console.log("++filterItem++", collection);
        var putApiUrl = `http://192.168.1.110:3000/queue/${filterItems.id}`;
        this.putQueueApiCall(putApiUrl, collection);

        // console.log("++clicked ", clickedId);
        // temparray.push({id:filterItems.id, img:filterItems.img, userName:filterItems.userName,},);
        this.setState({
          showState: [
            ...this.state.showState,
            {
              id: filterItems.id,
              queueState: filterItems.queueState,
              user: filterItems.user,
              priority: filterItems.priority,
            },
          ],
        });
      }
    });
    const currentIt = this.state.item.filter(
      (filterItems) => filterItems.id !== clickedId
    );
    this.setState({ item: currentIt });
  }

  showCompleteData(clickedId) {
    const collection = {};
    this.state.showState.filter((filterItems) => {
      if (filterItems.id === clickedId) {
        collection.id = filterItems.id;
        collection.hospital = filterItems.hospital;
        collection.queueState = this.state.CompProcess;
        collection.notes = filterItems.notes;
        collection.priority = filterItems.priority;
        collection.user = filterItems.user;
        console.log("++putItem++", collection);
        var putApiUrl = `http://192.168.1.110:3000/queue/${filterItems.id}`;
        this.putQueueApiCall(putApiUrl, collection);
        this.setState({
          completeStatus: [
            ...this.state.completeStatus,
            {
              id: filterItems.id,
              queueState: filterItems.queueState,
              user: filterItems.user,
              priority: filterItems.priority,
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
    this.setState({ showQueue: 1 });
  }
  showUserTable() {
    this.setState({ showQueue: 0 });
  }
  async putQueueApiCall(url, data) {
    console.log("postqueue data: ", data);
    let headers = { "content-type": "application/json" };
    let response = await axios({
      method: "PUT",
      url,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    console.log("queue response put= ", response);
  }
  // paginate(pageNumber) {
  //   this.setState({
  //     currentPage: pageNumber,
  //   });
  // }
  render() {
    return (
      <div className="topclass">
        <Heading />

        <div className="dataHolder">
          <div className="headingsName"></div>

          <div className="components">
            <div className="componentsInner">
              <IntialHeading />
              {this.state.item.length > 0
                ? this.state.item.map((items) => {
                    return (
                      <IntialData
                        identity={items.id}
                        img={items.queueState}
                        name={items.user}
                        priority={items.priority}
                        hospital={items.hospital}
                        hide={this.hide}
                        showData={this.showData}
                        // onUpdate={this.onUpdateQueue}
                      />
                    );
                  })
                : null}
            </div>
            <div className="componentsInner">
              <FinalHeading />
              {this.state.showState.length > 0
                ? this.state.showState.map((items) => {
                    return (
                      <PendingData
                        identityitem={items.id}
                        img={items.queueState}
                        name={items.user}
                        priority={items.priority}
                        showCompleteData={this.showCompleteData}
                      />
                    );
                  })
                : null}
            </div>
            <div className="componentsInner">
              <PendingHeading />
              {this.state.completeStatus.length > 0
                ? this.state.completeStatus.map((items) => {
                    return (
                      <FinalData
                        identityitem={items.id}
                        img={items.queueState}
                        name={items.user}
                        priority={items.priority}
                      />
                    );
                  })
                : null}

              {/* <FinalData/>  */}
            </div>
          </div>
        </div>

        <div className="Tables">
          <div className="BTNs">
            {this.state.showQueue > 0 ? (
              <Button
                style={{
                  backgroundColor: "red",
                  paddingBottom: "10",
                  fontWeight: "bold",
                }}
                onClick={() => this.showUserTable()}
              >
                View Users
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "white",
                  paddingBottom: "10",
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={() => this.showTable()}
              >
                View Queue Users
              </Button>
            )}
          </div>
          {this.state.showQueue > 0 ? <UsersData /> : <TableData />}
        </div>

        <div>
          <BackTop />
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

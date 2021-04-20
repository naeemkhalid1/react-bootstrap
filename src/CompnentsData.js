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
    const response = await fetch(`http://localhost:3000/queues`);
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
        var putApiUrl = `http://192.168.1.108:3000/queue/${filterItems.id}`;
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
          // queProcess: [
          //   ...this.state.queProcess,
          //   {
          //     id: filterItems.id,
          //     queueState: filterItems.queueState,
          //     user: filterItems.user,
          //     priority: filterItems.priority,
          //     hospital: filterItems.hospital,
          //     notes: filterItems.notes,
          //   },
          //   // () => {
          //   //   this.onUpdateQueue();
          //   // },
          // ],
        });
      }
    });
    const currentIt = this.state.item.filter(
      (filterItems) => filterItems.id !== clickedId
    );
    this.setState({ item: currentIt });
  }
  // pagintionHolder() {
  //   const indexOfLastPost = this.state.currentPage * this.state.dataPerPage;

  //   const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage;
  //   const currentPosts = this.state.getData.slice(
  //     indexOfFirstPost,
  //     indexOfLastPost
  //   );
  //   this.setState({
  //     item: currentPosts,
  //   });
  //   console.log("====", this.state.getData);
  //   console.log("index of last", indexOfLastPost);
  //   console.log("index of first", indexOfFirstPost);
  //   console.log("current posts", this.state.render);
  // }

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
        console.log("++filterItem++", collection);
        var putApiUrl = `http://192.168.1.108:3000/queue/${filterItems.id}`;
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
    this.setState({ showQueue: this.state.showQueue + 1 });
  }
  showUserTable() {
    this.setState({ showQueue: this.state.showQueue - 1 });
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
    {
      console.log("show queue", this.state.showQueue);
      console.log("show users", this.state.showQueue);
    }
    return (
      <div className="topclass">
        <Heading />
        {/* <Pagination
          postsPerPage={this.state.dataPerPage}
          totalPosts={this.state.getData.length}
          paginate={this.paginate}
        /> */}
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
            {this.state.showQueue.length > 0 ? (
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
          {this.state.showQueue.length > 0 ? <UsersData /> : <TableData />}
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

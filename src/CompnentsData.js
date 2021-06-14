import React, { Component } from "react";
import "antd/dist/antd.css";

import { Card } from "react-bootstrap";
import PendingData from "./PendendData";
import FinalData from "./FinalData";
import axios from "axios";
import { BackTop } from "antd";
import TableData from "./dbTable";
import UsersData from "./usersTableData";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBFormInline, MDBIcon, MDBInput } from "mdbreact";
import IntialData from "./IntialData";
import IntialHeading from "./Headings/intialHeading";
import PendingHeading from "./Headings/pendingHeading";
import FinalHeading from "./Headings/finalHeading";
import "./ComponentsData.css";

class ComponentsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      item: [],
      showState: [],
      completeStatus: [],
      showQueue: "",
      queProcess: "in-Process",
      CompProcess: "Completed",
      getData: this.props.location.state.objectProp,
      currentHospital: "",
      // dataPerPage: 3,
      renderData: "",
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
    console.log("iddddddd", id);
    var deleteApiUrl = `http://192.168.1.110:3000/queue/${id}`;

    fetch(deleteApiUrl, { method: "DELETE" });
    this.setState({ item: currentItems });
    const currentShowItems = this.state.showState.filter(
      (filterItems) => filterItems.id !== id
    );
    this.setState({ showState: currentShowItems });
  }
  async componentDidMount() {
    let tempvar = "";
    const response = await fetch(`http://192.168.1.110:3000/queues`);
    const json = await response.json();
    console.log("user Data+++++", json);
    const responseemail = await fetch("http://192.168.1.110:3000/allhospital");
    const jsonemail = await responseemail.json();
    if (this.state.getData !== "") {
      const emailFinder = jsonemail.filter(
        (filterme) => filterme.email === this.state.getData
      );
      const hospitalName = emailFinder.map(
        (value) => (tempvar = value.hospital)
      );
      // console.log("h", emailfound);
      this.setState({ currentHospital: hospitalName });
      console.log("h++++", this.state.getData);
      const hospitalfinder = json.filter(
        (filterme) => filterme.hospital === tempvar
      );
      if (hospitalfinder.length < 1) {
        this.setState({ renderData: "no data" });
      }
      console.log("h", hospitalfinder);
      // if (this.state.keyword !== "") {
      //   const waitingItems = hospitalfinder.filter((filterItems) => {
      //     filterItems.queueState === "Waiting";
      //     return filterItems.name
      //       .toLowerCase()
      //       .includes(this.state.keyword.toLowerCase());
      //   });
      //   this.setState({ item: waitingItems });
      // } else {
      const waitingItems = hospitalfinder.filter(
        (filterItems) => filterItems.queueState === "Waiting"
      );
      this.setState({ item: waitingItems });
      // }

      const inProcessItems = hospitalfinder.filter(
        (filterItems) => filterItems.queueState === "in-Process"
      );
      this.setState({ showState: inProcessItems });
      const completeItems = hospitalfinder.filter(
        (filterItems) => filterItems.queueState === "Completed"
      );
      this.setState({ completeStatus: completeItems });
    }

    // this.pagintionHolder();
  }
  filterData() {}
  showData(clickedId) {
    const currentdate = new Date();
    const processTime =
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const collection = {};
    this.state.item.filter((filterItems) => {
      if (filterItems.id === clickedId) {
        collection.id = filterItems.id;
        collection.hospital = filterItems.hospital;
        collection.queueState = this.state.queProcess;
        collection.notes = filterItems.notes;
        collection.priority = filterItems.priority;
        collection.user = filterItems.user;
        collection.processTime = processTime;
        // console.log("++filterItem++", collection);
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
  //   const updateInput = async (input) => {
  //     const filtered = countryListDefault.filter(country => {
  //      return country.name.toLowerCase().includes(input.toLowerCase())
  //     })
  //     setInput(input);
  //     setCountryList(filtered);
  //  }

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
    return response;
  }

  render() {
    {
      console.log("hospital", this.state.keyword);
    }
    return (
      <div className="topclass">
        {/* <div className="button">
          <Button
            variant="danger"
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            logout
          </Button>
        </div> */}
        <Heading data={this.state.currentHospital} />
        <div>
          <MDBCol md="6">
            <MDBInput
              hint="Search"
              type="text"
              value={this.state.keyword}
              onChange={(e) => {
                this.setState({ keyword: e.target.value });
              }}
              containerClass="active-pink active-pink-2 mt-0 mb-3"
            />
          </MDBCol>
        </div>

        <div className="dataHolder">
          <div className="headingsName"></div>

          <div className="components">
            <div className="componentsInner">
              <IntialHeading data={this.state.renderData} />

              {this.state.item.length > 0
                ? this.state.item.map((items, index) => {
                    console.log("push token", items.notes);
                    return (
                      <div key={index}>
                        <IntialData
                          identity={items.id}
                          pushToken={items.notes}
                          img={items.queueState}
                          name={items.user}
                          priority={items.priority}
                          hospital={items.hospital}
                          hide={this.hide}
                          showData={this.showData}
                          // onUpdate={this.onUpdateQueue}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="componentsInner">
              <FinalHeading data={this.state.renderData} />
              {this.state.showState.length > 0
                ? this.state.showState.map((items, index) => {
                    return (
                      <div key={index}>
                        <PendingData
                          identityitem={items.id}
                          img={items.queueState}
                          name={items.user}
                          priority={items.priority}
                          showCompleteData={this.showCompleteData}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="componentsInner">
              <PendingHeading data={this.state.renderData} />
              {this.state.completeStatus.length > 0
                ? this.state.completeStatus.map((items, index) => {
                    return (
                      <div key={index}>
                        <FinalData
                          identityitem={items.id}
                          img={items.queueState}
                          name={items.user}
                          priority={items.priority}
                        />
                      </div>
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
                variant="danger"
                // style={{
                //   backgroundColor: "red",
                //   paddingBottom: "10",
                //   fontWeight: "bold",
                // }}
                onClick={() => this.showUserTable()}
              >
                View Users
              </Button>
            ) : (
              <Button
                variant="success"
                // style={{
                //   backgroundColor: "white",
                //   paddingBottom: "10",
                //   color: "black",
                //   fontWeight: "bold",
                // }}
                onClick={() => this.showTable()}
              >
                View Queue Users
              </Button>
            )}
          </div>
          {this.state.showQueue > 0 ? (
            <UsersData adminEmail={this.state.getData} />
          ) : (
            <TableData adminEmail={this.state.getData} />
          )}
        </div>

        <div>
          <BackTop />
        </div>
      </div>
    );
  }
}
const Heading = ({ data }) => {
  const holder1 = data.toString();
  const holder = holder1.toUpperCase();

  return (
    <Card style={{ width: "38rem" }} className="mainCard maincomponentData">
      <Card.Title>
        <h2 className="headingtag"> {holder}</h2>
      </Card.Title>
    </Card>
  );
};
export default ComponentsData;

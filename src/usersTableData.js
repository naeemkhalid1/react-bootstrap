// import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./ComponentsData.css";

// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,<div className="componentsInner">
//   Button,
//   SafeAreaView,
// } from "react-native";
// import logo from "./assets/boy.png";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
// import { log } from "react-native-reanimated";

class UsersData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      hospitalName: "",
    };
  }
  //   ShowData = async () => {
  //     const result = await axios("http://localhost:3000/detail");
  //     console.log("result", result);
  //     const temp = result.data;
  //     return this.setState({ item: temp });
  //   };
  async componentDidMount() {
    const response = await fetch(`http://192.168.1.110:3000/queues`);
    const json = await response.json();
    this.setState({ item: json });
    const responseemail = await fetch("http://192.168.1.110:3000/allhospital");
    const jsonemail = await responseemail.json();
    const hospitalFind = jsonemail.filter((filter) => {
      if (filter.email === this.props.adminEmail) {
        this.setState({ hospitalName: filter.hospital });
      }
    });
  }
  displayData() {
    return this.state.item.map((item, i) => {
      if (item.hospital === this.state.hospitalName) {
        return (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.hospital}</td>
            <td>{item.queueState}</td>
            <td>{item.notes}</td>
            <td>{item.priority}</td>
            <td>{item.user}</td>
          </tr>
        );
      }
    });
  }

  render() {
    console.log("kkkkkkkk", this.state.hospitalName);
    // const { identityitem, img, name } = this.state;
    {
      // console.log("datadisplayed", this.state.item);
    }
    return (
      <div>
        <div className="tableHolder">
          <h1 id="title">Queue Users</h1>
          <table id="users">
            <thead>
              <tr>
                <th>Id</th>
                <th>Hospital Name</th>
                <th>State</th>
                <th>Notes</th>
                <th>priority</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>{this.displayData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersData;

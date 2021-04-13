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
    };
  }
  //   ShowData = async () => {
  //     const result = await axios("http://localhost:3000/detail");
  //     console.log("result", result);
  //     const temp = result.data;
  //     return this.setState({ item: temp });
  //   };
  async componentDidMount() {
    const response = await fetch(`http://localhost:3000/queues`);
    const json = await response.json();
    this.setState({ item: json });
  }
  displayData() {
    console.log("running");
    return this.state.item.map((item, i) => {
      console.log("length", this.state.item.length);
      return (
        <tr key={i}>
          <td>{item.hospital}</td>
          <td>{item.queueState}</td>
          <td>{item.notes}</td>
          <td>{item.priority}</td>
          <td>{item.user}</td>
        </tr>
      );
    });
  }

  render() {
    // const { identityitem, img, name } = this.state;
    {
      console.log("datadisplayed", this.state.item);
    }
    return (
      <div className="">
        <h1 id="title">Queue Users</h1>
        <table id="users">
          <thead>
            <tr>
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
    );
  }
}

export default UsersData;

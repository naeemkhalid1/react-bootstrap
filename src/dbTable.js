// import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
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

class TableData extends Component {
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
    const response = await fetch(`http://192.168.1.110:3000/detail`);
    const json = await response.json();
    this.setState({ item: json });
  }
  displayData() {
    return this.state.item.map((item, i) => {
      return (
        <tr key={item.id}>
          <td>{item.date_added}</td>
          <td>{item.name}</td>
          <td>{item.disease}</td>
          <td>{item.phone}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
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
      <div className="tableHolder">
        <h1 id="title">Users Table</h1>
        <table id="users">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Disease</th>
              <th>phone#</th>
              <th>age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody id="tbody">{this.displayData()}</tbody>
        </table>
        {/* <Pagination defaultCurrent={1} total={50} /> */}
      </div>
    );
  }
}

export default TableData;

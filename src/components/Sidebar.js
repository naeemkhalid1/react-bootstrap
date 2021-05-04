import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "../Main.css";
import avatar from "../assets/avatar.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  font-family: "Spartan", sans-serif;
  box-shadow: 5px 5px 13px rgb(0 0 0 / 10%), -5px -5px 13px rgb(0 0 0 / 10%);
  color: #000;
  width: 100%;
`;

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 16px;
  display: flex;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #1e1e2c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;

  font-family: "Spartan", sans-serif;
`;
const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const Sidebar = () => {
  const [sidebarOpen, setSidebarState] = useState(true);
  const [sidebaropened, setSidbar] = useState(false);
  const showSidebar = () => setSidebarState(!sidebarOpen);
  const showsub = (id) => {
    console.log("id", id);
    SidebarData.filter((item) => {
      if (item.id === id) {
        setSidbar(id);
        console.log("noe", sidebaropened);
      }
      // if (item.id !== id) {
      //   setSidbar(false);
      //   console.log("yes", sidebaropened);
      // }
    });
  };

  return (
    <>
      <Nav>
        <div className="buger">
          <NavIcon to="#">
            <FaIcons.FaBars className="burgr" onClick={showSidebar} />
          </NavIcon>
        </div>
        <div className="rightitem">
          <Row>
            <Col sm={3}></Col>
            <Col sm={3}></Col>
            <Col sm={3}>
              {" "}
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <IoIcons.IoIosNotifications></IoIcons.IoIosNotifications>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Notificatonsflkjfsdflj</Dropdown.Item>
                  <Dropdown.Item>Notificationjflsdjflds</Dropdown.Item>
                  <Dropdown.Item>Profiledlfjdslfjds</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm={3}>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <IoIcons.IoIosPerson></IoIcons.IoIosPerson>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </Nav>

      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebarOpen}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  value={index}
                  state={sidebaropened}
                  clickedid={showsub}
                />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

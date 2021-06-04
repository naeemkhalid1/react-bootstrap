import { React, useEffect, useState, Dimensions } from "react";
import ComponentsData from "../CompnentsData";
import axios from "axios";
import "./registration.css";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { isCompositeComponent } from "react-dom/test-utils";
const FormPage = () => {
  const history = useHistory();
  const [getDetail, setDetail] = useState();
  const [emailcheck, setEmailcheck] = useState(false);
  const [getlatitude, setlatitude] = useState();
  const [getlongitude, setlongitude] = useState();
  const [readMore, setReadMore] = useState(false);
  const [nameInput, setNameInput] = useState({
    name: "",
    errorMsg: "",
  });
  const [nameHospitalInput, setHospitalNameInput] = useState({
    hospitalname: "",
    hospitalerrorMsg: "",
  });
  const [hospitalEmail, setHospitalEmail] = useState({
    hospitalEmailget: "",
    hospitalEmailMsg: "",
  });
  const [conformHospitalEmail, setConformHospitalEmail] = useState({
    conformHospitalEmailGet: "",
    conformHospitalEmailMsg: "",
  });
  const [password, setpassword] = useState({
    passwordGet: "",
    passwordMsg: "",
  });
  const locationFinder = async () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = parseFloat(position.coords.latitude);
        var lng = parseFloat(position.coords.longitude);
        // console.log("location fo user latitude++", lat);
        // console.log("location fo user logitude", lng);
        setlatitude(lat);
        setlongitude(lng);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };
  console.log("longi___", getlatitude);
  console.log("latitude----", getlongitude);
  useEffect(async () => {
    locationFinder();
    const response = await fetch("http://192.168.2.71:3000/allhospital");
    const json = await response.json();
    console.log("data++++", json.length);
    setDetail(json);
    getDetails();
  }, []);
  const postApiCall = async (url, data) => {
    console.log("postqueue data: ", data);
    let headers = { "content-type": "application/json" };
    let response = await axios({
      method: "POST",
      url,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    console.log("queue response put= ", response);
  };
  const getDetails = async () => {
    if (getDetail !== undefined) {
      getDetail.map((value, index) => {
        if (value.email === hospitalEmail.hospitalEmailget) {
          setEmailcheck(true);
        }
      });
    }
  };

  const onSubmit = (e) => {
    let collection = {};
    let namecheck = /^[a-zA-Z0-9_ ]*$/;
    let emailvalidaton =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordRgx =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let isValid = namecheck.test(nameInput.name);
    let isnamevalid = namecheck.test(nameHospitalInput.hospitalname);
    let EmailValid = emailvalidaton.test(hospitalEmail.hospitalEmailget);
    let ConformEmailValid = emailvalidaton.test(
      conformHospitalEmail.conformHospitalEmailGet
    );

    let passwordValid = passwordRgx.test(password.passwordGet);

    if (isValid === false || nameInput.name === "") {
      setNameInput({ errorMsg: "* Name required" });
      e.preventDefault();
      return false;
    }
    if (!isnamevalid || nameHospitalInput.hospitalname === "") {
      setHospitalNameInput({ hospitalerrorMsg: "* Hospital Name required" });
      e.preventDefault();
      return false;
    }
    if (!EmailValid || hospitalEmail.hospitalEmailget === "") {
      setHospitalEmail({ hospitalEmailMsg: "* Valid Email required" });
      e.preventDefault();
      return false;
    }
    if (emailcheck === true) {
      setHospitalEmail({
        hospitalEmailMsg: "* Email Is already registered.please login",
      });
      e.preventDefault();
      return false;
    }
    if (
      hospitalEmail.hospitalEmailget !==
        conformHospitalEmail.conformHospitalEmailGet ||
      conformHospitalEmail.conformHospitalEmailGet === "" ||
      !ConformEmailValid
    ) {
      setConformHospitalEmail({ conformHospitalEmailMsg: "Email mismatch" });
      e.preventDefault();
      return false;
    }
    if (!passwordValid || password.passwordGet === "") {
      setpassword({
        passwordMsg:
          "*Must be 8 character long, combination fo uper lower charachters",
      });
      e.preventDefault();
      return false;
    } else {
      history.push("/associations", {
        objectProp: hospitalEmail.hospitalEmailget,
      });
    }
    collection.admin = nameInput.name;
    collection.hospital = nameHospitalInput.hospitalname;
    collection.email = hospitalEmail.hospitalEmailget;
    collection.password = password.passwordGet;
    collection.longitude = getlongitude;
    collection.latitude = getlatitude;

    var postApiUrl = "http://192.168.2.71:3000/createhospital"; //"`http://192.168.1.110:3000/createhospital"; //192.168.1.107
    postApiCall(postApiUrl, collection);
    // getApiCall(getUrl, collection);
  };
  return (
    <div className="main_container">
      <div className="text_right">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Sign up</p>
                    <div className="grey-text">
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {nameInput.errorMsg}
                      </span>
                      <MDBInput
                        label="Admin name"
                        icon="user"
                        group
                        type="text"
                        onInput={(text) => {
                          setNameInput({ name: text.target.value });
                        }}
                        value={nameInput.name}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {nameHospitalInput.hospitalerrorMsg}
                      </span>

                      <MDBInput
                        label="Hospital name"
                        icon="hospital"
                        group
                        type="text"
                        validate
                        error="wrong"
                        onInput={(text) => {
                          setHospitalNameInput({
                            hospitalname: text.target.value,
                          });
                        }}
                        value={nameHospitalInput.hospitalname}
                        success="right"
                      />
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {hospitalEmail.hospitalEmailMsg}
                      </span>
                      <MDBInput
                        label="Hospital email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        onInput={(text) => {
                          setHospitalEmail({
                            hospitalEmailget: text.target.value,
                          });
                        }}
                        value={hospitalEmail.hospitalEmailget}
                        error="wrong"
                        success="right"
                      />
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {conformHospitalEmail.conformHospitalEmailMsg}
                      </span>
                      <MDBInput
                        label="Confirm  email"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        onInput={(text) => {
                          setConformHospitalEmail({
                            conformHospitalEmailGet: text.target.value,
                          });
                        }}
                        value={conformHospitalEmail.conformHospitalEmailGet}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {password.passwordMsg}
                      </span>
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        onInput={(text) => {
                          setpassword({ passwordGet: text.target.value });
                        }}
                        value={password.passwordGet}
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit" onClick={onSubmit}>
                        Register
                      </MDBBtn>
                    </div>
                    <div className="text-center text-center-extra">
                      <p style={{ paddingTop: 0 }}>Already registered?</p>
                      <div>
                        <a
                          className="read-more-link"
                          onClick={() => {
                            // setReadMore(!readMore);
                            history.push("/login");
                          }}
                        >
                          <h6
                            style={{
                              fontWeight: "bold",
                              paddingLeft: 5,
                              color: "rgba(250, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Signin Here
                          </h6>
                        </a>
                      </div>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default FormPage;

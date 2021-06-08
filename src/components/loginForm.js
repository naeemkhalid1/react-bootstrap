import { React, useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import "./registration.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

const LoginPage = () => {
  const history = useHistory();
  const [getDetail] = useState(false);
  const [getData, setData] = useState();
  const [emailcheck] = useState(false);

  const [hospitalEmail, setHospitalEmail] = useState({
    hospitalEmailget: "",
    hospitalEmailMsg: "",
  });
  const [password, setpassword] = useState({
    passwordGet: "",
    passwordMsg: "",
  });

  useEffect(async () => {
    const response = await fetch("http://192.168.2.71:3000/allhospital");
    const json = await response.json();
    console.log("data++++", json);
    setData(json);
    console.log("getDaa", json.length);
  }, []);

  const onSubmit = (e) => {
    // e.preventDefault();
    if (hospitalEmail.hospitalEmailget === "") {
      setHospitalEmail({ hospitalEmailMsg: "* Email required" });
      e.preventDefault();
      return false;
    }
    if (emailcheck === true) {
      setHospitalEmail({
        hospitalEmailMsg: "*Provided Email Is not registered.please Register",
      });
      e.preventDefault();
      return false;
    }
    if (password.passwordGet === "") {
      setpassword({
        passwordMsg: "*please fill password",
      });
      e.preventDefault();
      return false;
    }
    console.log("+++++", getDetail);
    if (getDetail === true) {
      console.log("+++++", getDetail);
    }
    getData.map((value, index) => {
      if (
        value.email === hospitalEmail.hospitalEmailget &&
        value.password === password.passwordGet
      ) {
        history.push("/associations", {
          objectProp: hospitalEmail.hospitalEmailget,
          hospitalName: value.hospital,
        });
        // <Route
        //   exact
        //   path="/associations"
        //   component={hospitalEmail.hospitalEmailget}
        // />;
      }
      //   if (value.email !== hospitalEmail.hospitalEmailget) {
      //     setEmailcheck(true);
      //   }
    });
    // else {
    //   history.push("/associations");
    // }
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
                    <p className="h4 text-center py-4">Please Login Here</p>
                    <div className="grey-text">
                      <span style={{ color: "red", paddingLeft: 10 }}>
                        {hospitalEmail.hospitalEmailMsg}
                      </span>
                      <MDBInput
                        label="Your hospital email"
                        icon="envelope"
                        group
                        type="email"
                        onInput={(text) => {
                          setHospitalEmail({
                            hospitalEmailget: text.target.value,
                          });
                        }}
                        value={hospitalEmail.hospitalEmailget}
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
                        log in
                      </MDBBtn>
                    </div>
                    <div className="text-center text-center-extra">
                      <p style={{ paddingTop: 0 }}>Not registered Yet?</p>
                      <div>
                        <a
                          className="read-more-link"
                          onClick={() => {
                            // setReadMore(!readMore);
                            history.push("/");
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
                            Register Here
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

export default LoginPage;

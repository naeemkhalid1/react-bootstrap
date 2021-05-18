//import logo from "./logo.svg";
import ComponentsData from "./CompnentsData";
//import PendingData from "./PendendData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/registration";
//import  LoginPage from "./components/loginForm"
import LoginForm from "./components/loginForm";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Card, Button } from "react-bootstrap";

function App() {
  return (
    // <div className="App">
    //   {/* <ComponentsData /> */}
    //   <Form />
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/associations" component={ComponentsData} />
        <Route path="/login" component={LoginForm} />
        {/* <Route path="/users" component={Users} />
        <Route path="/plans" component={Plans} />
        <Route path="/newinvoice" component={Newinvoice} />
        <Route path="/invoicelist" component={Invoicelist} />
        <Route path="/addnotice" component={Addnotice} />
        <Route path="/gateway" component={Gateways} />
        <Route path="/sms" component={Sms} />
        <Route path="/email" component={Email} />
        <Route path="/addons" component={Addons} />
        <Route path="/loggeduser" component={Latesloggedin} />  */}
      </Switch>
    </Router>
  );
}
// import { Form } from 'react-bootstrap';

export default App;

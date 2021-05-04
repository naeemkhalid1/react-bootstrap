import logo from "./logo.svg";
import ComponentsData from "./CompnentsData";
import PendingData from "./PendendData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./logo192.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

      <ComponentsData />
    </div>
  );
}
// import { Form } from 'react-bootstrap';

export default App;

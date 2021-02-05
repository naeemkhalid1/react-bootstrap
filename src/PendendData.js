import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import "./intialData.css";
import FinalData from './FinalData';
 
class PendingData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:'',
        }
    }
dataHolder(){
    const tempvar=this.props.PendingData;
    console.log("tempcar",tempvar);
}

    render(){
        // const data= this.state.item.map((item,i)=>{
        //   return <div key={i}>
        //       <ul className="listUser">
        //           <li>{item}</li>
        //           <Button>Approve</Button>
                  
                  
        //       </ul>
        //   </div>
        //   })
        this.dataHolder();
       
         

        return(
            <div className="intial_data">
              <Heading/>  
         
<Card style={{ width: '18rem', height:'16rem'}} className="main_Card">
  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
  <Card.Body>
    <Card.Title>Task in Processing</Card.Title>
    <Card.Text>
       
      Processing tasks will be shown here.
    
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
       

    <ListGroupItem>Pending Data will be here</ListGroupItem> 
    {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
  </ListGroup>
  {/* <Card.Body> */}
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  {/* </Card.Body> */}
</Card>

</div>
        )
    }



}
const Heading=()=>{
    return(
        <div className="intialDataHeading">
    <Card style={{ width: '18rem' }} className="mainCard">
    <Card.Title><span className="headings"> TASKS IN PROCESSING</span></Card.Title>
    </Card> 
    </div>)

};

export default PendingData;
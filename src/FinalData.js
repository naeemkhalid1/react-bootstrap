import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import "./intialData.css";
 
class FinalData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{id:1,},{id:2,},{id:3,},]
        }
    }


    render(){
        const renderdata=(tasks)=>{
            return <Card style={{ width: '18rem',height: '16rem' }} className="main_Card extraClass" key={tasks.id}>
                        
                        <Card.Body style={{background:'rgb(224, 235, 235)'}}>
                            <Card.Title style={{background:'white', border:'5px'}}>STATUS</Card.Title>
                        <Card.Text className="paragraphClass">
                            
                            Completed!
                    
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            

                            {/* <ListGroupItem>Final Data will be here</ListGroupItem>  */}
                        </ListGroup>
                        
                    </Card>

}
        
return(
         <div className="intial_data">
             <Heading/>
             {
                 this.state.item.map(renderdata)
             }

          </div>
)}



}
const Heading=()=>{
    return(
        <div className="intialDataHeading">
    <Card style={{ width: '18rem' ,padding:'10px 0 0 0'}} className="mainCard">
    <Card.Title><span className="headings"> TASKS COMPLETED</span></Card.Title>
    </Card> 
    </div>)

};

export default FinalData;
import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import PendingData from './PendendData';
import FinalData from './FinalData';
import './intialData.css';
 
class IntialData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{id:1, img:"./avatar.png", userName:"AHMED",},{id:2, img:"./img_avatar.png", userName:"YASIR",},{id:3, img:"./boy.png", userName:"MEHMOOD",},],
            showData:{
                id:'',
                userName:'',
            },
        }
        this.hide=this.hide.bind(this);
    }
    hide(){
       
        this.setState({
            showData:this.state.id,
        })

    }
   
    render(){
        const renderCards=(user)=>{
            console.log("called",user)

     return <Card style={{ width: '18rem',height: '16rem' }} className="mainCard extraClass" key={user.id}>
       <Card.Img style={{width:'50%',height:'50%',margin:'0 auto'}} variant="top" src={user.img} />
      
  <Card.Body>
  <Card.Title>{user.userName} <span style={{color:'green',fontSize:'15px'}}>Requesting</span></Card.Title>
    <Card.Text>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
       

    <ListGroupItem> <Button onClick={this.hide}> Process </Button>  <Button onClick={this.hide}style={{background:'red',}}> DECLINE </Button></ListGroupItem> 
  </ListGroup>
 
</Card>
        
        }
return(
            <div className="intial_data">
                <Heading/>
         
               {this.state.item.map(renderCards)}

           </div>
        )}
}
const Heading=()=>{
    return(
        
    <Card style={{ width: '18rem',padding:'10px 0 0 0' }} className="mainCard intialDataHeading">
    <Card.Title><span className="headings"> USER REQUESTS</span></Card.Title>
    </Card> 

)

};
export default IntialData;
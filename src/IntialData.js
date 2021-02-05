import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import PendingData from './PendendData';
import FinalData from './FinalData';
import './intialData.css';
 
class IntialData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{id:1, userName:"AHMED",},{id:2, userName:"YASIR",},{id:3, userName:"MEHMOOD",},],
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
  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
  <Card.Body>
  <Card.Title>{user.userName} <span style={{color:'green',fontSize:'15px'}}>Requesting</span></Card.Title>
    <Card.Text>
    {/* {user.userName} */}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
       

    <ListGroupItem> <Button onClick={this.hide}> Process </Button></ListGroupItem> 
  </ListGroup>
 
</Card>
        
        }
        // const data= this.state.item.map((item,i)=>{
        //   return <div key={item.id}>
        //       <ul className="listUser">
        //           <li>{item.userName}</li>
        //           {/* <PendingData  key={item.id} userName={item.name} onSend={this.hide}  /> */}   
        //       </ul>
           
        //   </div>
        //   })
         

        return(
            <div className="intial_data">
        <Heading/>
         
 {
     this.state.item.map(renderCards)
     
 }

</div>
        )
       
    }



}
const Heading=()=>{
    return(
        
    <Card style={{ width: '18rem' }} className="mainCard intialDataHeading">
    <Card.Title><span className="headings"> USER REQUESTS</span></Card.Title>
    </Card> 

)

};
export default IntialData;
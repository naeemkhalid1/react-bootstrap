import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import PendingData from './PendendData';
import FinalData from './FinalData';
import IntialData from './IntialData';
import './ComponentsData.css';
 
class ComponentsData extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         item:[{id:1, userName:"Ahmed",},{id:2, userName:"yasir",},{id:3, userName:"khan",},],
    //         showData:{
    //             id:'',
    //             userName:'',
    //         },
    //     }
    //     this.hide=this.hide.bind(this);
    // }
    // hide(){
       
    //     this.setState({
    //         showData:this.state.id,
    //     })

    // }
    render(){
        // const data= this.state.item.map((item,i)=>{
        //   return <div key={item.id}>
        //       <ul className="listUser">
        //           <li>{item.userName}</li>
        //           {/* <PendingData  key={item.id} userName={item.name} onSend={this.hide}  /> */}   
        //       </ul>
           
        //   </div>
        //   })
         

        return(
            <div className="components">
        
         
{/* <Card style={{ width: '18rem' }} className="mainCard">
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title><span className="headings">User Requests</span></Card.Title>
    <Card.Text>
       
     students requests for approvel.
    
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
       

    <ListGroupItem>{data}  <Button onClick={this.hide}> Process </Button></ListGroupItem> 
  </ListGroup>
  <Card.Body>
   
  </Card.Body>
</Card> */}
<IntialData/>
<PendingData   />
<FinalData/>
</div>
        )
       
    }



}
export default ComponentsData;
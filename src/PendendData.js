import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import "./intialData.css";
import FinalData from './FinalData';
 
class PendingData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{id:1, img:"./boy.png", user_n:"JOHN"},{id:2, img:"./img_avatar.png",  user_n:"DOE"},{id:3,img:"./avatar.png",  user_n:"JAMES"},],
        }
    }
// dataHolder(){
//     const tempvar=this.props.PendingData;
//     console.log("tempcar",tempvar);
// }

render(){
        const renderData=(data)=>{
        return    <Card style={{ width: '18rem',background:'rgb(128, 0, 64)'  , height:'16rem'}} className="main_Card extraClass" key={data.id}>
             <Card.Img style={{width:'50%', background:'rgb(128, 0, 64)'  , height:'50%',margin:'0 auto'}} variant="top" src={data.img} />
                        <Card.Body style={{background:'rgb(128, 0, 64)'}}>
                            <Card.Title style={{color:'white'}} >{data.user_n}</Card.Title> 
                            <Card.Title className="paragraphClass">
                            {/* <span style={{color:'white',fontSize:'30px'}} >
                            {data.user_n}
                            </span> */}
                            </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush" >
                            

                            <ListGroupItem style={{background:'rgb(128, 0, 64)'}}><Button onClick={this.hide} style={{background:'rgb(102, 102, 102)'}}> MARK COMPLETE </Button></ListGroupItem> 
                            
                        </ListGroup>
                </Card>

        }
 return(
            <div className="intial_data">
              <Heading/>  
         
{this.state.item.map(renderData)}

</div>
        )
    }



}
const Heading=()=>{
    return(
        <div className="intialDataHeading">
    <Card style={{ width: '18rem',padding:'10px 0 0 0'  }} className="mainCard">
    <Card.Title><span className="headings"> TASKS IN PROCESSING</span></Card.Title>
    </Card> 
    </div>)

};

export default PendingData;
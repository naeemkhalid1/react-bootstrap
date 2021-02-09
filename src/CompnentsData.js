import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import PendingData from './PendendData';
import FinalData from './FinalData';
import IntialData from './IntialData';
import './ComponentsData.css';
 
class ComponentsData extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{id:1, img:"./avatar.png", userName:"Ahmed",},{id:2,img:"./img_avatar.png", userName:"yasir",},{id:3,img:"./boy.png",  userName:"khan",},],
            showState:'',
        
        }
    this.hide=this.hide.bind(this);
    this.showData=this.showData.bind(this);
    }
    hide(id){
       
     const currentItems= this.state.item.filter(filterItems=> filterItems.id !==id);
     this.setState({item:currentItems});

    }
    showData(clickedId){
       
        const currentItems= this.state.item.filter(filterItems=> filterItems.id ===clickedId);
        this.setState({showState:currentItems});
        console.log("showData",currentItems);
   
       }
    render(){
        return(
            <div className="topclass">
                <Heading/>
                    <div className="components">
                     {this.state.item.map(items=>{
                        
                        return <IntialData identity={items.id} img={items.img} name={items.userName} hide={this.hide} showData={this.showData}/>
                     
                     })}
                      {/* {this.state.showState.map(items=>{
                        
                        return  <PendingData identityitem={items.id} img={items.img} name={items.userName}/>
                     
                     })} */}
                          
                      
                            {/* <FinalData/>  */}
                    </div>
            </div>
        )
 }
}
const Heading=()=>{
    return( 
    <Card style={{ width: '38rem' }} className="mainCard maincomponentData">
    <Card.Title><h2 className="headingtag"> USERS DATA</h2></Card.Title>
    </Card> 
    )

};
export default ComponentsData;
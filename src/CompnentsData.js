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
            <div className="topclass">
                <Heading/>
                    <div className="components">

                            <IntialData/>
                            <PendingData />
                            <FinalData/>
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
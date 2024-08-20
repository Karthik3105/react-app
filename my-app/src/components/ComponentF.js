import React, { Component } from 'react';
import { UserConsumer } from './userContext';
import UserContext from './userContext'

class ComponentF extends Component {

    static contextType = UserContext
    render() {
        return (
//             <UserConsumer>
//                 {
//                     (username) =>{
// return <div> heelo {username}</div>
//                     }
//                 }
//             </UserConsumer>
<div>componentf {this.context}</div>
        );
    }
}

export default ComponentF;
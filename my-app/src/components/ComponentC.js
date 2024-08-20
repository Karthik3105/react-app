import React, { Component } from 'react';
import ComponentF from './ComponentF';
// import { UserConsumer } from './userContext';
class ComponentC extends Component {
    render() {
        return (
            <div>
                {/* <UserConsumer>
                {
                    (username) =>{
return <div> heelo {username}</div>
                    }
                }
            </UserConsumer> */}
             <ComponentF />   
            </div>
        );
    }
}

export default ComponentC;
import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state ={
          logedin: false
        }
    }

    render() {
        // return this.state.logedin && <div>   Welcome Karthik    </div>
       return this.state.logedin ? <div>   Welcome Karthik    </div> : <div>   Welcome Anjali    </div> 
        // if(this.state.logedin){
        // return (
        //     <div>
        //         Welcome Karthik
        //     </div>
        // );}
        // else{
        //     return (
        //         <div>
        //             Welcome Anjali
        //         </div>
        //     );
        // }
    }
}

export default UserGreeting;
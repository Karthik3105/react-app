import React,{ Component } from "react";

class Welcome extends Component{
    constructor(){
        super()
        this.state ={
            message: 'welcome msg'
        }
    }

    changeMessage=()=>{
        this.setState({
            message: 'thanku'
        })
    }


    render(){
        // return (<div><h1>{this.state.message}</h1><button onClick={this.changeMessage.bind(this)}>subscribe</button></div>)
        return (<div><h1>{this.state.message}</h1><button onClick={this.changeMessage}>subscribe</button></div>)
    }
}

export default Welcome
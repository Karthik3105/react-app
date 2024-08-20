import React,{ Component } from "react";

class Count extends Component{
    constructor(){
        super()
        this.state ={
            count: 0
        }
    }

    changeMessage(){
        // this.state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        }, () => console.log('karthik2', this.state.count))
        // console.log('karthik2',this.state.count)
        // this.setState((prevState) => ({z
        //     count: prevState.count + 1
        // }))
    }

    incfive(){
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()

    }

    render(){
        return (<div><h1>{this.state.count}</h1><button onClick={() => this.incfive()}>subscribe</button></div>)
    }
}

export default Count
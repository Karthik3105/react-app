import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Vishwas'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA derived')
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    stateChange = () => {
       this.setState({
        name: 'code'
       })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <button onClick={this.stateChange}>statechange</button>
                <LifeCycleB></LifeCycleB>
            </div>
        );
    }
}

export default LifeCycle;
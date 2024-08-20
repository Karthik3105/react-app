import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB derived')
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleB;
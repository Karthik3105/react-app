import React from 'react';

// function Greet(){
//     return <h1>hello karthik</h1>
// }

// const Greet1 = () => {  
//     // return (
//     // <h1>hello karthik</h1>
//     // )
//     return React.createElement('div',{id:'heelo'},'heel') 
// }
// const Greet1 = props => {  
//     return (

//     <h1>hello {props.name} {props.children}</h1>
//     )
   
// }

const Greet1 = props => {  
    const {name, children} = props
        return (
    
        <h1>hello {name} {children}</h1>
        )
       
    }

export default Greet1;

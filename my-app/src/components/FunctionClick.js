import React from "react";


function FunctionClick() {
  function clickHandler(){
    console.log('button click')
  }

    return (
      <div >
        <button onClick={clickHandler()}></button>
      </div>
    );
  }
  
  export default FunctionClick;
import React from "react";
import Person from "./Person";

function NameList() {
 
    const name = ['NRUCE','DIANNA','ROY','ROY'];
    const persons = [{id:1,name:'bruce'},{id:2,name:'bruce1'},{id:3,name:'bruce2'}];
    // const personlist =  persons.map(person => <Person person={person}></Person>);
    const namelist =  name.map(person => <h1  key={person}>{person}</h1>);
      return (
        
        <div >
   {namelist}
        </div>
        
      );
    }
    
    export default NameList;
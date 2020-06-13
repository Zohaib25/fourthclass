import React, { useState } from 'react';
import './Room.css';


function Room() {
    //const state = useState(true);
    //console.log("State= ",state)
    let [isLit, setLit] = useState(true);
    let [temperature, setTemperature] = useState(22);
    /*function updateLit()
    {
        console.log("Button clicked");
        setLit(!isLit);
    }*/
    /*function updateAge()
    {
        console.log("Increment Age");
        setAge(++age);
    }*/
    /*const updateAge = ()=>{
        console.log("Increment Age");
        setAge(++age);
    }*/
    return (
    <div className={"room " +(isLit? "lit":"dark")}>
        This is Zohaib's Room and it is currently {isLit? "lit": "dark"}
        <br/>
        <button onClick={()=> {
            console.log("For ON");
            setLit(true); // can be made in a single line like ()=> setLit(!isLit);
        }} >Light ON</button>
        <br/>
        <button onClick={()=>{
            console.log("For OFF");
            setLit(false);
        }
        }>Light OFF</button>
        <br/>
        Current temperature: {temperature}
        <br/>
        <button onClick={()=>{
        console.log("Increment Temprature");
        setTemperature(++temperature);
    }} >+</button>
        <br/>
        <button onClick={()=>{
        console.log("Derement Temprature");
        setTemperature(--temperature);
    }} >-</button>
        </div>
  )
  ;
}

export default Room;
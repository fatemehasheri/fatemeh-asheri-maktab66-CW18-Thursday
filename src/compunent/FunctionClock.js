import React, { useState,useEffect } from 'react';


function addColor() {
    let random =  Math.floor(Math.random() * 16777215).toString(16);
    return ("#"+ random);
}

function FunctionClock() {

    const [time,setTime]=useState(new Date())
    const [color,setColor]=useState("#fff")
    useEffect(() => {
        const intervalId = setInterval(() => {setTime(new Date())} ,1000); 
        return () => {
            clearInterval(intervalId)
        };
    });
    
    useEffect(() => {
        setColor(addColor())
    },[time])
    
    return (
        <div style={{ color: color }}>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default FunctionClock;

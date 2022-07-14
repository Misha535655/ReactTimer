import React from 'react'
import { useState, useEffect } from 'react';
function Timer({seconds}) {
    const [state, setState] = useState(seconds);
    useEffect(() => {
        document.getElementById('btn').addEventListener('click', () => clearInterval(interval))
        const interval = setInterval(() => {
            setState(state => state - 1)
            }, 1000)
            setTimeout(() => clearInterval(interval), seconds*1000)
    }, []);
    const date = new Date()
    date.setSeconds(state)
    date.setMinutes(Math.floor(state / 60))
    date.setHours(Math.floor(state / 3600))
    console.log(date.getMinutes()) 
  return (
    <div>
            <p>{date.getHours()}h : {date.getMinutes()}min : {date.getSeconds()}sec</p> 
            <button id='btn'>
                Stop
            </button>
    </div>
  )
}

export default Timer
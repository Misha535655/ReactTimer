import React from 'react'
import { useState } from 'react';
import Timer from './Timer';
function TimeControl() {
  const [hours, setHours] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const [start, setStart] = useState(false);
  return (
    <div>
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder='enter Hours'/>
        <br />
        <input  type="number" value={min}  onChange={(e) => setMin(e.target.value)} placeholder='enter Minutes'/>
        <br />
        <input  type="number" value={sec}  onChange={(e) => setSec(e.target.value)} placeholder='enter Seconds'/>
        <br />
        <button onClick={() => setStart(!start)}>START</button>
          {start && <Timer seconds={(+hours*3600) + (+min*60) + (+sec)}/>}
    </div>
  )
}

export default TimeControl
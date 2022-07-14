import React from 'react'
import { useState } from 'react';

function RangeInput({min , max}) {
    const [state, setState] = useState(0);
  return (
    <div>
        <input type="text" onChange={(e) => {
            setState(e.target.value.length);
            console.log(e.target.style)
            if(state < min || state > max) {
                e.target.style.backgroundColor = 'red'
            }else{
                e.target.style.backgroundColor = 'white'
            }
        }}/>
    </div>
  )
}

export default RangeInput
import React from 'react'
import { useState } from 'react';

function PasswordConfirm(min) {
    const [state, setstate] = useState(0);
  return (
    <div>
        <input type='password' onChange={(e) => {
            setstate(e.target.value.length)
            if(state < min) {
                console.log("Plohoi Parol");
            }
        }}/>
    </div>
  )
}

export default PasswordConfirm
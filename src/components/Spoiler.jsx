import React from 'react'
import { useState } from 'react';

 const Spoiler = ({header="+", open, children}) => {
    const [Open, setOpen] = useState(open);
    return <div className='spoiler'>
        <header onClick={()=> {setOpen(() => !Open)}}>
            {header}
        </header>
        {Open && children}
    </div>
}

export default Spoiler

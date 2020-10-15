import React, { useState } from 'react';

import './Colors.css';

function Colors() {

    const colors = ['purple', 'brown', 'green', 'pink', 'black'];

    const [index, setIndex] = useState(0);
    
    const [color, setColor] = useState('none');
    
    function handleClick() {
        
        setColor(colors[index]);

        index !== colors.length - 1 ? setIndex(index + 1) : setIndex(0);

    }

    return (
        
        <div><span className={color} >Currently selected color: {color} </span><button onClick={ handleClick }>Change Color</button></div>
    );
} 

export default Colors;
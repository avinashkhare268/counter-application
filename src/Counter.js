import React from 'react';
import { useState } from 'react';

function Counter(){

    const [count, setCounter] = useState(0);

    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={() => setCounter(count+1)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => setCounter(count-1)}>Increment</button>
        </div>
    )
}

export default Counter;
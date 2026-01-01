import { useState } from "react";

export function Counter(){
    const [count ,setcount] =useState(0);

    const increment =() =>{
        setcount((prev )=>prev +1);

    };

    const decrement =() =>{
        setcount((prev )=>prev -1);

    };

    


    return (
        <div>
            <h1>Counter</h1>
            <p>This is the Counter values {count}</p>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> deccrement</button>

        </div>
    )
}
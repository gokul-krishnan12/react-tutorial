import { useState } from "react";


function Stateexample() {
    const [count, setCount] = useState(0);
    console.log('component rendered');
    const handleClick = () => {
        setCount(count + 1);
    }   
    return <div>
    <h1>This is State Example Component</h1>;
    <h3>counter {count}</h3>
    <button onClick={handleClick} style={{color:"blue"}}>increment</button>
    </div>
}   
export default Stateexample;
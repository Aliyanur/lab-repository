import { useState } from "react";
function StepCounter({ initialValue=0, step=1}){

    const [count, setCount]=useState(initialValue);
    const [history, setHistory]=useState([]);
    const[operationCount, setoperationCount]=useState(0);

    const increment=()=>{
        const newCount=count+step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setoperationCount(operationCount+1);
    };

    const decrement=()=>{
        const newCount=count-step;
        setCount(newCount);
        setHistory([...history, newCount]);
        setoperationCount(operationCount+1);
    };

    const rest=()=>{
        setCount(initialValue);
        setHistory([]);
        setoperationCount(0);
    };

    const lastFiveHistory=history.slice(-5);

    return(
        <div style={{border:'1px solid #cc', padding:'16px', marginBottom:'16px'}}>
            <h2>Count:{count}</h2>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Deccrement</button>
            <button onClick={rest}> Reset</button>  
            <p>Total operations:{operationCount}</p>
            <p>History (tast 5):</p>

            <ul>{lastFiveHistory.map((value, index)=>(
                <li key={index}>{value}</li>
            ))}
            </ul>           
        </div>
    );
}

export default StepCounter;





// import { useState } from "react";
// function StepCounter({ initialValue=0, step=1}){

//     const [count, setCount]=useState(initialValue);

//     return(
//         <div>
//             <h2>Count:{count}</h2>
//             <button onClick={()=> setCount(count+step)}> Increment</button>
//             <button onClick={()=> setCount(count-step)}> Deccrement</button>            
//         </div>
//     );
// }

// export default StepCounter;
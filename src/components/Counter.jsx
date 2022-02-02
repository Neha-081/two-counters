import React, { useEffect, useState } from 'react';

function Counter() {
    const [count1,setCounter1]=useState(0);
    const [count2,setCounter2]=useState(0);

    useEffect(()=>{
       setCounter2(count1*2)
       if(count1>10){
         setCounter2(0)
       }
    },[count1])

  return <div>
    <h1>Counter 1:{count1}</h1>
    <h1>Counter 2:{count2}</h1>
    <button onClick={()=>setCounter1(count1+1)}>Increment</button>
  </div>;
}

export default Counter;

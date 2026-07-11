import { useState } from "react";

function App(){
  
  const [count,setCount] = useState(0);
  function increase(){
    setCount(count - 1);
    
  }

  return(
    <>
    <h1>{count}</h1>
    <button onClick = {increase}>+</button>
    </>
  );
}

export default App;
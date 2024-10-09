import './App.css';
import React , {useState} from "react"
const App = () => {
  const [count , setCount] = useState(0)
  function increment(){
    setCount(count+1);
  };
  function decrement(){
    if(count > 0){
      setCount(count -1);
    }
    
  };
  function reset(){
    setCount(0);
  };


  return (
    <div id='box'>
    <h1 className='head'>Counter App</h1>
    <h1>{count}</h1>
    <button onClick= {increment} className='btn'>Increment</button>
    <button onClick= {decrement} className='btn'>Decrement</button>
    <button onClick= {reset } className='btn'>Reset</button>
    </div>
  )
  
};
export default App;
  

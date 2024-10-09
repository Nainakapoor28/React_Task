import './App.css';

import React , {useState} from "react";
const App = () => {
  const [item , setItem] = useState("")
  const [textfeild , setTextfeild] = useState([])
  function addItems() {
    if(item !== ""){
      setTextfeild(PrevTectfeild => {
        const newlist = [...PrevTectfeild , item]
        localStorage.setItem("mylist", JSON.stringify(newlist));
        return newlist
      });
      setItem("");
    }
  }

  function strike(index) {
    let box = document.getElementById(`check-${index}`)
    let textElement = document.getElementById(`textelement-${index}`)
    if (box.checked) {
      textElement.style.textDecoration = "line-through"
    }else{
      textElement.style.textDecoration = "none"
    }
   }

   function dlt() {
    const newTextfeild = textfeild.filter((_, index) => {
      const box = document.getElementById(`check-${index}`);
      return !box.checked; 
    });
    setTextfeild(newTextfeild);
    localStorage.setItem("mylist", JSON.stringify(newTextfeild));
  }


  return (
    <div>
      <h1>TO-DO LIST</h1>
      <input type="text" id="text" placeholder="Enter the text" value={item} onChange={(e) => setItem(e.target.value)} />
      <br />
      <button id="btn" onClick = {addItems}>SAVE</button>
      <button id="dlt" onClick={dlt}>DELETE</button>
      <ul id="list">
        {textfeild.map((value , index) =>
        <li key ={index}>
          <input type="checkbox" id={`check-${index}`} onChange={() => strike(index)} />
          <span id={`textelement-${index}`}>{value}</span>
        </li>
        )}
      </ul>
    </div>
  )
}
export default App;


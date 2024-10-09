import './App.css';
import React from "react";
const App = () => {
    function start(){
        const contain = document.getElementById("container")
        const ques = document.getElementById("sawal")
        contain.style.display = "none"
        ques.style.display = "block"
    }
    function submit(){
        const scoredisplay = document.getElementById("display")
        const aftersub = document.getElementById("aftersubmit")
        const ques = document.getElementById("sawal")
        aftersub.style.display = "block"
        ques.style.display = "none"
    }
    function score(){
        const scoredisplay = document.getElementById("display")
        const choice1 = document.querySelector('input[name="choice1"]:checked');
        const choice2 = document.querySelector('input[name="choice2"]:checked');
        const choice3 = document.querySelector('input[name="choice3"]:checked');
        const choice4 = document.querySelector('input[name="choice4"]:checked');
        const choice5 = document.querySelector('input[name="choice5"]:checked');

        let score = 0
        if(choice1 && choice1.value === "scripting"){
            score += 2
        }
        if(choice2 && choice2.value === "JSON.parse()"){
            score += 2
        }
        if(choice3 && choice3.value === "push()"){
            score += 2
        }   
        if(choice4 && choice4.value === "pop()"){
            score += 2
        }
        if(choice5 && choice5.value === "Block"){
            score += 2
        }
        scoredisplay.textContent = ` Your Score is : ${score}/10`
    }

    return (
        <div>
            <div id="container">
                <button id="btn" onClick={() => start()}>START QUIZ</button>
            </div>
            <div className="question" id="sawal">
            <div className="ques" id="q1">
                <h3> 1. Which type of language is javascript?</h3>
                <label>Scripting</label>
                <input type='radio' id='mcq1' name='choice1' value='scripting'/>
                <label>Programming</label>
                <input type='radio'id='mcq1' name='choice1' value='Programming'/>
                <label>Application</label>
                <input type='radio'id='mcq1' name='choice1' value='Application'/>
                <label>None of These</label>
                <input type='radio'id='mcq1' name='choice1' value='None of These'/>
            </div>
            <div className="ques" id="q2">
                <h3> 2. Which method is used to convert a JSON string into a JavaScript object?</h3>
                <label>JSON.parse()</label>
                <input type='radio' id='mcq2' name='choice2' value='JSON.parse()'/>
                <label>JSON.stringify()</label>
                <input type='radio' id='mcq2' name='choice2' value='JSON.stringify()'/>
                <label>JSON.convert()</label>
                <input type='radio' id='mcq2' name='choice2' value='JSON.convert()'/>
                <label>JSON.objectify()</label>
                <input type='radio' id='mcq2' name='choice2' value='JSON.objectify()'/>  
            </div>
            <div className="ques" id="q3">
                <h3> 3.  Which method is used to add the element in an array?</h3>
                <label>pop()</label>
                <input type='radio' id='mcq3' name='choice3' value='pop()'/>
                <label>push()</label>
                <input type='radio' id='mcq3' name='choice3' value='push()'/>
                <label>shift()</label>
                <input type='radio' id='mcq3' name='choice3' value='shift()'/>
                <label>slice()</label>
                <input type='radio' id='mcq3' name='choice3' value='slice('/>
            </div>
            <div className="ques" id="q4">
                <h3> 4. Which method is used to remove the last element from an array?</h3>
                <label>pop()</label>
                <input type='radio' id='mcq4' name='choice4' value='pop()'/>  
                <label>shift()</label>
                <input type='radio' id='mcq4' name='choice4' value='shift()'/>
                <label>slice()</label>
                <input type='radio' id='mcq4' name='choice4' value='slice()'/>
                <label>del()</label>
                <input type='radio' id='mcq4' name='choice4' value='del()'/>
            </div>
            <div className="ques" id="q5">
                <h3> 5. What is the scope of a variable declared with let?</h3>
                <label>Global</label>
                <input type='radio' id='mcq5' name='choice5' value='Global'/>
                <label>Function</label>
                <input type='radio' id='mcq5' name='choice5' value='Function'/>
                <label>Block</label>
                <input type='radio' id='mcq5' name='choice5' value='Block'/>
                <label>None of the above</label>
                <input type='radio' id='mcq5' name='choice5' value='None of the above'/>
            </div>
            <button id="sub" onClick={() => submit()}>SUBMIT</button>
            </div> 
            <div id="aftersubmit">
                <h1>You have successfully submitted your quiz!</h1>
                <button id="score" onClick={() => score()}>VIEW SCORE</button>
                <h2 id="display"></h2>
            </div>
        </div>

    )
};
export default App;
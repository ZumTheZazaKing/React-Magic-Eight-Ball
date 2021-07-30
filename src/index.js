import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './style.css';
import reportWebVitals from './reportWebVitals';



function Input(props){

  return <div>
    <form onSubmit={props.handleSubmit}>
    <input required onChange={props.handleChange} type="text" 
    placeholder="Ask me a question" value={props.question}/>
    <input type="submit" value="Submit"/>
    </form>
  </div>

}

function Output(props){

  return <div>
    <p>{props.data}</p>
  </div>

}



function App(){

  const responses = [
    "It is certain","It is decidedly so","Without a doubt","Yes - definitely",
    "You may rely on it","As I see it, yes","Most likely","Outlook good",
    "Yes","Signs point to yes","Reply hazy, try again","Ask again later",
    "Better not tell you now","Cannot predict now",
    "Concentrate and ask again","Don't count on it","My reply is no",
    "My sources say no","Outlook not so good","Very doubtful"
  ];

  let [question, setQuestion] = useState("");
  let [response, setResponse] = useState("");

  const questionChange = e => setQuestion(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    if(question.toLowerCase().search(/(who|where|what|when|why|how)/g) !== -1){
      return alert("The Question has to be Yes or No");
    }

    let questionCopy = question.toLowerCase().replace(/[_\s?]/g, "");

    for(var i = 0; i < localStorage.length; i++){
      if(questionCopy === localStorage.key(i)){
        if(localStorage.getItem(questionCopy) === "Reply hazy, try again"||
        localStorage.getItem(questionCopy) === "Ask again later"||
        localStorage.getItem(questionCopy) === "Better not tell you now"||
        localStorage.getItem(questionCopy) === "Cannot predict now"||
        localStorage.getItem(questionCopy) === "Concentrate and ask again"){
          break;
        }
        return setResponse(localStorage.getItem(questionCopy));
      }      
    }

    let chosenReponse = responses[Math.floor(Math.random()*responses.length)];
    setResponse(chosenReponse);

    localStorage.setItem(questionCopy, chosenReponse);

  };


  return <div>

    <Input handleSubmit={handleSubmit} question={question} handleChange={questionChange}/>
    <Output data={response}/>

  </div>

}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

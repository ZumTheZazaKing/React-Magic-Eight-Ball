import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';



function Input(){

  return <div>
    <form>
    <input type="text" placeholder="Ask me a question"/>
    <input type="submit" value="Submit"/>
    </form>
  </div>

}

function Output(){

  return <div>
    <p>Sample Text</p>
  </div>

}



function App(){

  return <div>

    <Input/>
    <Output/>

  </div>

}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

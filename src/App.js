import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm.js';

// function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');
  // useEffect(() => {
  //   setCount(count + 1)
  //   document.title = text;
  // },[text]);

  // const [current, setCurrent] = useState(0);

//  return (
  // 2 arajadranq
  const App = () => {
    return (
      <div className="appp">
         <AddTaskForm />
         <TaskList />
       </div>
     );
   };


  // <div className="App"> 1 arajadranq
  // <span style={{color : 'white'}}>{count}</span>
  // <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  // </div>



  // <div className="cont"> 3 arajadranq
  //       <button onClick={() => {
  //         setCurrent( current < 400 ? current + 100 : 0)
  //       }}>Prev</button>
  //       <button onClick={() => {
  //         setCurrent(current > 0 ? current - 100 : 400)
  //       }}>Next</button>
  //        <div className="slider" style={{ left: `-${current}%` }}>
  //         <div className="item"></div>
  //         <div className="item"></div>
  //         <div className="item"></div>
  //         <div className="item"></div>
  //         <div className="item"></div>
  //        </div>
  //     </div>    
//   );
// }

export default App;

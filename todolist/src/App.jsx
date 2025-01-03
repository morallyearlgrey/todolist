import './App.css';
import {Task} from './components/Task';
import {useState} from 'react';

function App() {

  const [tasksList, addTask] = useState(
    []
  );

  let [input, curInput] = useState("");

  return (
    <div className="App">
      <div className="Text">
        <h1 className="Headline">TO-DO LIST</h1>
        <h1 className="Subheading">DESTROYER OF ALL THAT IS PROCRASTINATION</h1>
      </div>
      <div className="Content">
        <h1>{ tasksList.map((task, key) => { 
          return(
          <div>
            <button className="Complete" onClick={() => { 
              const newTaskList = tasksList.map((ntask, i) => i === key ? {...ntask, status: !ntask.status } : ntask); 
              addTask(newTaskList); 
            }
          }>Complete</button> 
          <Task task={task.task} status={task.status}/></div>)
          } ) }</h1>
        <input id="Input" type="text" value={input} onInput={(e) => { curInput(e.target.value); }}></input>
        <button id="Add" onClick={() => { 
          curInput(""); 
          addTask([...tasksList, {task: input, status: false}]); 
          }}>ADD TASK</button>
      </div>
    </div>
  );
}
// addTask([...tasksList, {task: {input}, status: false}]); display(); 

export default App;

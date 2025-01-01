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
      <h1 className="Headline">Simple To-Do List</h1>
      <h1>{ tasksList.map((task, key) => { 
        return(<div><button onClick={() => { const newTaskList = tasksList.map((ntask, i) => i === key ? {...ntask, status: !ntask.status } : ntask); addTask(newTaskList); }}>Complete</button> <Task task={task.task} status={task.status}/></div>)
        } ) }</h1>
      <input type="text" value={input} onInput={(e) => { curInput(e.target.value); }}></input>
      <button onClick={() => { curInput(""); addTask([...tasksList, {task: input, status: false}]); }}>ADD TASK</button>
    </div>
  );
}
// addTask([...tasksList, {task: {input}, status: false}]); display(); 

export default App;

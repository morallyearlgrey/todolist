import './App.css';
import {Task} from './components/Task';
import {useState} from 'react';
import buttonClick from "./music/buttonClick.mp3";

function App() {

  const playAudio = async() => {
    const audio = new Audio(buttonClick);
    audio.volume=0.9999;
    audio.preload = "auto";
    await audio.play();
  };

  const [tasksList, addTask] = useState([]);
  const [input, curInput] = useState("");
  let [audioBool, updateAudioBool] = useState(true);
  let [audioText, updateAudioText] = useState("♫");

  return (
    <div className="App">
      <div className="Useful">
      <div className="Left">
      <div className="Text">
        <h1 className="Headline">TO-DO LIST</h1>
        <h1 className="Subheading">DESTROYER OF ALL THAT IS PROCRASTINATION</h1>
      </div>
      <div className="Content">
        <h1>{ tasksList.map((task, key) => { 
          return(
          <div className="tasks">
           <button id="Complete" onClick={() => {
              const newTaskList = tasksList.map((ntask, i) => 
                i === key ? { ...ntask, status: !ntask.status } : ntask
              );    
              addTask(newTaskList);
            }}>{task.status ? "✔" : " "}</button>
          <Task task={task.task} status={task.status}/>
          <button id="Delete" onClick={() => { 
              const newTaskList = [...tasksList];
              newTaskList.splice(key, 1);
              addTask(newTaskList);
          }}>DELETE</button>
          </div>)
          } ) }
        </h1>
        <input id="Input" type="text" value={input} onInput={(e) => { curInput(e.target.value); }}></input>
        <br></br>
        <button id="Add" onClick={() => { 
          curInput(""); 
          addTask([...tasksList, {task: input, status: false}]); 
          if(audioBool===true) {
            playAudio();
            
          } 
          }}>ADD TASK</button>
            <button id="AudioToggle" onClick={() => { updateAudioBool(audioBool=!audioBool); if(audioBool) { updateAudioText("♫"); } else { updateAudioText("̶♫̶"); } } }>{audioText}</button>
        <br></br>
      </div>
      </div>
      <div className="Right">

      </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {Task} from './components/Task';
import {useState} from 'react';
import audio from "./music/oo-ee-a-ea.mp3";
import surpriseaudio from "./music/bye-bye.mp3";

function App() {

  const playAudio = async() => {
    const imsorry = new Audio(audio);
    imsorry.preload = "auto";
    await imsorry.play();
  };

  const surpriseAudio = async() => {
    const imsorry = new Audio(surpriseaudio);
    imsorry.preload = "auto";
    await imsorry.play(); 
    
  }

  const [tasksList, addTask] = useState([]);
  const [input, curInput] = useState("");
  let [amogus, showAmogus] = useState(false);
  let [audioBool, updateAudioBool] = useState(true);

  return (
    <div className="App">
      {amogus === true && <div className="amogus"></div>}
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
          }}>Delete</button>
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
          <button id="AudioToggle" onClick={() => { updateAudioBool(audioBool=!audioBool); } }>♫</button>
        {/* <button id="Brainrotify" onClick={() => { showAmogus(amogus=!amogus); if(amogus) { surpriseAudio(); } }}>you know you want to click me 😏 oh you want to so bad</button> */}
        <br></br>
      </div>
      </div>
      <div className="Right">
      {amogus === true && <div className="mog"></div>}

      </div>
      </div>
      <div className="Surprise">
        {amogus === true && <div className="amogus"></div>}
      </div>
    </div>
  );
}
// addTask([...tasksList, {task: {input}, status: false}]); display(); 

export default App;

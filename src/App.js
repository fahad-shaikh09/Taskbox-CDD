import './App.css';
import React, {useState} from "react"
import AddTask from './components/AddTask';

function App() {
 
  const [tasks,SetTasks] = useState([])


  //Function in parrent comp to update parrent's stats when new task is added through AddTask comp
  // const updatedTasks = (tasks) => {
  //   SetTasks(tasks)
  // }

  return (
    <div className="App">
                      
      <AddTask tasks={tasks} SetTasks={SetTasks}/>         
    </div>
  );
}

export default App;

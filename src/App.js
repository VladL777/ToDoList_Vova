import './App.css';
import './components/TaskList'
import TaskList from './components/TaskList';
import Input from './components/Input';
import { useState } from 'react';
import Storage from './Storage';

//Storage.fillStorage()
//console.log(Storage.getTasks());

function App() {

  const [tasks, setTasks] = useState(Storage.getTasks())

  const delBtnClickHandler = (id) => {
    setTasks(Storage.deleteTask(id))
  }

  const keyEnterPressed = (taskText) => {
    setTasks(Storage.addTask(taskText))
    //console.log(taskText);
  }

  return (
    <div className="App">
     <header>
       <p>Список Дел</p>
     </header>
     <Input keyEnterPressed={keyEnterPressed}/>
     <TaskList tasks={tasks} onDelBtnClick={delBtnClickHandler}/>
    </div>
  );
}

export default App;

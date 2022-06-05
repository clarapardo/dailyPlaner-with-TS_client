import React, { FC, ChangeEvent, useState, isValidElement } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './interfaces'
import { currentDay } from './utils/dateFormater'


const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }


  return (
    <div className="App">

      <div className="left-panel">

        <h1>to-do list</h1>

        <div className='newTaskCard'>

          <div className="add-icon"><span>+</span></div>
          <div className="add-inputs">
            <h6>Add new task</h6>
            <input type="text" placeholder='Task' name="task" value={task} onChange={handleChange} />
            <input type="number" placeholder='Deadline (in days)...' name="deadline" value={deadline} onChange={handleChange} />
            <textarea className="descriptionInput" name="description" id="desription" placeholder='Description'></textarea>
            <div className='add-btn-container'><button onClick={addTask} className='add-btn'>add</button></div>
          </div>

        </div>
      </div>

      <div className="right-panel">

        <div className="column1">
          <h1>Today's schedule</h1>
          <h1 className="currentDay">{currentDay()}</h1>
          <div>
            {todoList.map((task: ITask, key: number) => {
              return <TodoTask key={key} task={task} completeTask={completeTask} />
            })}
          </div>
        </div>

        <div className="column2">
          <h1>Hello XXXX</h1>
        </div>
        
      </div>

    </div>
  );
}

export default App;

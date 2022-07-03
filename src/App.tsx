import './App.css'
import React, { FC, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'


import LeftPanel from './components/01.LeftPannel/LeftPanel'
import RightPanel from './components/02.RightPanel/RightPanel'

import { getTasks, addTask, updateTask, deleteTask } from './API'



const App: FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [date, setDate] = useState(new Date())


  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = (): void => {
    getTasks()
      .then(({ data: { tasks } }: ITask[] | any) => setTasks(tasks))
      .catch((err: Error) => console.log(err))
  }



  const handleSaveTask = (e: React.FormEvent, formData: ITask): void => {
    e.preventDefault()

    addTask(formData)
      .then(({ status, data }) => {

        if (status !== 201) {
          throw new Error("Error! Task not saved")
        }

        setTasks(data.tasks)
        fetchTasks()
      })
      .catch((err: Error) => console.log(err))
  }

  const handleUpdateTask = (task: ITask): void => {

    updateTask(task)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Task not updated")
        }
        fetchTasks()
      })
      .catch(err => console.log(err))
  }

  const handleDeleteTask = (_id: string): void => {

    deleteTask(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Task not deleted")
        }
        fetchTasks()
      })
      .catch(err => console.log(err))
  }

  const onChange = (newDate: Date) => setDate(newDate)

  const addDays = (addition: number): void => {

    const editedDate = new Date(Number(date))
    editedDate.setDate(date.getDate() + addition)

    setDate(editedDate)
  }


  return (
    <div className="App">
    
      <Row>
        <Col md={3} className="noSpaces">
          <LeftPanel handleSaveTask={handleSaveTask} onChange={onChange} />
        </Col>

        <Col md={9} className="noSpaces">
          <RightPanel addDays={addDays} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} tasks={tasks} date={date} />
        </Col>

      </Row>

    </div>
  )
}



export default App

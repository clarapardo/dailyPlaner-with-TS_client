import './Section1.css'
import { currentDay } from './../../../utils/dateFormater'
import { FC } from 'react'

import TodoTask from './TodoTask/TodoTask'


type Props = TasksProps & DateProps & {
    addDays: (addition: number) => void
    handleUpdateTask: (task: ITask) => void
    handleDeleteTask: (_id: string) => void
}


const Section1: FC<Props> = ({ tasks, date, addDays, handleUpdateTask, handleDeleteTask }) => {

    const filterByDate = (task: any) => {

        if (new Date(task.deadline).getDate() === date.getDate() &&
            new Date(task.deadline).getMonth() === date.getMonth() &&
            new Date(task.deadline).getFullYear() === date.getFullYear()) {
            return task
        }
    }

    const orderConditions = (taskA: any, taskB: any): number => {

        let deadlineA = new Date(taskA.deadline)
        let deadlineB = new Date(taskB.deadline)

        if (taskB.status === 'toDo' && taskA.status === 'completed') {
            return 1
        } else if (taskA.status === 'toDo' && taskB.status === 'completed') {
            return -1
        } else {
            if (deadlineB.getHours() > deadlineA.getHours()) {
                return -1
            } else if (deadlineB.getHours() < deadlineA.getHours()) {
                return 1
            } else {
                if (deadlineB.getMinutes() > deadlineA.getMinutes()) {
                    return -1
                } else {
                    return 1
                }
            }
        }
    }


    return (
        <div className="section1">

            <h1>Today's schedule</h1>

            <div className="dateTitle">
                <button className="addDays-btn" onClick={() => addDays(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
                </button>
                <h1 className="currentDay">{currentDay(date)}  </h1>
                <button className="addDays-btn" onClick={() => addDays(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
                </button>
            </div>

            <div>{tasks
                .filter(task => filterByDate(task))
                .sort(orderConditions)
                .map((task: ITask) => {
                    return <TodoTask key={task._id} updateTask={handleUpdateTask} deleteTask={handleDeleteTask} task={task} />
                })}
            </div>

        </div>
    )
}



export default Section1
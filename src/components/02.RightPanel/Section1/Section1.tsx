import './Section1.css'
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
            <div className="todoList">

                <div className='fullHeight'>{tasks
                    .filter(task => filterByDate(task))
                    .sort(orderConditions)
                    .map((task: ITask) => {
                        return <TodoTask key={task._id} updateTask={handleUpdateTask} deleteTask={handleDeleteTask} task={task} />
                    })}
                </div>
            </div>
        </div>
    )
}



export default Section1
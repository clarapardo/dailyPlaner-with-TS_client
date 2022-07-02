import React, { FC } from "react"
import { time } from "./../utils/dateFormater"


type Props = TaskProps & {
    updateTask: (task: ITask) => void
    deleteTask: (_id: string) => void
}


const Task: FC<Props> = ({ task, updateTask, deleteTask }) => {

    return (
        <div className="eachTask" onClick={() => updateTask(task)}>

            <div>+</div>

            <div className={task.status === 'toDo' ? "task" : "completedTask"}>
                <div className="add-icon">+</div>
                <div className="taskInfo">
                    <div className="taskTitle">
                        <h2>{task.taskName} <button onClick={() => deleteTask(task._id)}><img className="trash" src="/img/bin.png" alt="bin" /></button></h2>
                        <h3>{time(task.deadline)}</h3>
                    </div>
                    <div>
                        <p>{task.description}</p>
                    </div>

                </div>
            </div>

        </div >
    )
}



export default Task
import React, { FC } from "react";


type Props = TaskProps & {
    updateTask: (task: ITask) => void
    deleteTask: (_id: string) => void
}


const Task: FC<Props> = ({ task, updateTask, deleteTask }) => {
    return (
        <div className="eachTask">

            <div>+</div>

            <div className="task">
                <div className="add-icon">+</div>
                <div className="taskInfo">
                    <div className="taskTitle">
                        <h2>{task.taskName} <button onClick={() => updateTask(task)}><img className="trash" src="/img/bin.png" alt="bin" /></button></h2>
                        <h3>{task.description}</h3>
                    </div>
                    <div>
                        <p>{task.description}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Task
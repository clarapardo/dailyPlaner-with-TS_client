import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task: ITask
    completeTask(taskNameToDelete: string): void
}


const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="eachTask">
            <div>+</div>
            <div className="task">
                <div className="add-icon">+</div>
                <div className="taskInfo">
                    <div className="taskTitle">
                        <h2>{task.taskName} <button onClick={() => { completeTask(task.taskName) }}><img className="trash" src="/img/bin.png" alt="bin" /></button></h2>
                        <h3>{task.deadline}</h3>
                    </div>
                    <div>
                        <p>{task.description}</p>
                    </div>

                </div>
            </div>
        
        </div>
    )
}


export default TodoTask
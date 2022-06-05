import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task: ITask
    completeTask(taskNameToDelete: string): void
}


const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="eachTask">
            <div className="task">
                <div className="add-icon">+</div>
                <div className="taskInfo">
                    <div className="taskTitle">
                        <h2>{task.taskName} <button onClick={() => { completeTask(task.taskName) }}><span className="icon-trashcan"></span></button></h2>
                        <h3>{task.deadline}</h3>
                    </div>
                    <div>
                        <p>aqui hiría la descripción</p>
                    </div>

                </div>
            </div>
        
        </div>
    )
}


export default TodoTask
import React, { FC, ChangeEvent, useState, isValidElement } from 'react';
import { ITask } from "../interfaces/ITask";


interface Props {
    task: ITask
}

const TaskCard = (task: Props) => {
    
    

    return (
        <div className='newTaskCard'>

            <div className="add-icon"><span>+</span></div>
            <div className="add-inputs">
                <h6>Add new task</h6>
                <div className='taskName-time'>
                    <input type="text" placeholder='Task' name="task" value={task} onChange={handleChange} />
                    <input type="time" name="deadline" value={deadline} onChange={handleChange} className="timeInput" />
                </div>

                <select name="category" id="category" value={category} onChange={handleChange}>
                    <option value="1">Workout</option>
                    <option value="2">Work</option>
                    <option value="3">Social</option>
                    <option value="4">Health</option>
                    <option value="5">Other</option>
                </select>

                <input type="text" placeholder='Description' name="description" value={description} onChange={handleChange} className="descriptionInput"></input>
                <div className='add-btn-container'>
                    <button onClick={addTask} className='add-btn'>add</button>
                </div>
            </div>
        </div>
    )
}


export default TaskCard
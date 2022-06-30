import React, { FC, ChangeEvent, useState, isValidElement } from 'react';
import { ITask } from "../interfaces/ITask";


type Props = {
    saveTask: (e: React.FormEvent, formData: ITask | any) => void
}


const AddTask: FC<Props> = ({ saveTask }) => {

    const [formData, setFormData] = useState<ITask | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='newTaskCard' onSubmit={(e) => saveTask(e, formData)}>

            <div className="add-icon"><span>+</span></div>
            <div className="add-inputs">

                <h6>Add new task</h6>

                <div className='taskName-time'>
                    <input type="text" placeholder='Task' name="task" onChange={handleForm} />
                    <input type="time" name="deadline" onChange={handleForm} className="timeInput" />
                </div>

                {/* <select name="category" id="category" onChange={handleForm}>
                    <option value="workout">Workout</option>
                    <option value="work">Work</option>
                    <option value="social">Social</option>
                    <option value="health">Health</option>
                    <option value="other">Other</option>
                </select> */}

                <input type="text" placeholder='Description' name="description" onChange={handleForm} className="descriptionInput"></input>

                <div className='add-btn-container'>
                    <button disabled={formData === undefined ? true : false} className='add-btn'>add</button>
                </div>
            </div>
        </form>
    )
}


export default AddTask
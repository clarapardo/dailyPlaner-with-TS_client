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
        console.log('*******', formData)
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setFormData({ ...formData, "category": value })
    }

    return (
        <form className='newTaskCard' onSubmit={(e) => saveTask(e, formData)}>

            <div className="add-icon"><span>+</span></div>
            <div className="add-inputs">

                <h6>Add new task</h6>

                <input type="text" placeholder='Task' name="taskName" id="taskName" onChange={handleForm} />

                <div className='time-category'>
                    <input type="datetime-local" name="deadline" id="deadline" onChange={handleForm} className="timeInput" />

                    <select className="category-input" name="category" id="category" onChange={selectChange}>
                        <option value="other">Category</option>
                        <option value="workout">Fitness</option>
                        <option value="work">Work</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                    </select>
                </div>


                <input type="text" placeholder='Description' name="description" id="description" onChange={handleForm} className="descriptionInput"></input>

                <div className='add-btn-container'>
                    <button disabled={formData === undefined ? true : false} className='add-btn'>add</button>
                </div>
            </div>
        </form>
    )
}


export default AddTask
import './NewTask.css'
import React, { FC, useState } from 'react'
import { ITask } from "../../../interfaces/ITask"


type Props = {
    saveTask: (e: React.FormEvent, formData: ITask | any) => void
}


const AddTask: FC<Props> = ({ saveTask }) => {

    const [formData, setFormData] = useState<ITask>({
        taskName: '',
        deadline: new Date(),
        category: '',
        description: ''
    })

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setFormData({ ...formData, "category": value })
    }

    const saveAndReset = (e: React.FormEvent<HTMLFormElement>): void => {
        saveTask(e, formData)
        setFormData({
            taskName: '',
            deadline: new Date(),
            category: 'other',
            description: ''
        })
    }

    return (
        <form className='newTaskCard' onSubmit={(e) => saveAndReset(e)}>

            <div className="add-icon"><span>+</span></div>

            <div className="add-inputs">

                <h6>Add new task</h6>

                <input type="text" placeholder='Task' name="taskName" id="taskName" onChange={handleForm} value={formData.taskName} className="taskName-input" />

                <div className='time-category'>
                    <input type="datetime-local" name="deadline" id="deadline" onChange={handleForm} className="time-input" />

                    <select className="category-input" name="category" id="category" value={formData.category} onChange={selectChange}>
                        <option value="other">Category</option>
                        <option value="workout">Fitness</option>
                        <option value="work">Work</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                    </select>
                </div>


                <input type="text" placeholder='Description' name="description" id="description" value={formData.description} onChange={handleForm} className="description-input"></input>

                <div className='add-btn-container'>
                    <button disabled={formData === undefined ? true : false} className='add-btn'>add</button>
                </div>

            </div>

        </form>
    )
}



export default AddTask
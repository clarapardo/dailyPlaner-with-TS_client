import './LeftPanel.css'
import React, { FC } from 'react'

import NewTask from './NewTask/NewTask'
import DatePicker from 'sassy-datepicker'


type Props = {
    handleSaveTask: (e: React.FormEvent, formData: ITask | any) => void
    onChange: (newDate: Date) => void
}


const LeftPanel: FC<Props> = ({ handleSaveTask, onChange }) => {

    return (
        <div className="left-panel">

            <h1><img className='logo' src="/img/todoList.png" alt="todoList-icon" />daily planner</h1>

            <NewTask saveTask={handleSaveTask} />

            <DatePicker onChange={onChange} />

        </div>
    )
}



export default LeftPanel
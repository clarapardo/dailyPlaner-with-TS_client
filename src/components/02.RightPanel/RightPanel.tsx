import './RightPanel.css'
import { FC } from 'react'

import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'


type Props = TasksProps & DateProps & {
    addDays: (addition: number) => void
    handleUpdateTask: (task: ITask) => void
    handleDeleteTask: (_id: string) => void
}


const RightPanel: FC<Props> = ({ tasks, date, addDays, handleUpdateTask, handleDeleteTask }) => {

    return (
        <div className="rightPanel">

            <Section1 addDays={addDays} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} tasks={tasks} date={date} />
            <Section2 />

        </div>
    )
}



export default RightPanel
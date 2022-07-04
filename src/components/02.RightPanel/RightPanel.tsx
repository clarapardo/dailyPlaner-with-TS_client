import './RightPanel.css'
import { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { currentDay } from './../../utils/dateFormater'


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

            <div className="header position-fixed">

                <h1 className="heroTitle">Today's schedule</h1>

                <div className="dateTitle">
                    <button className="addDays-btn" onClick={() => addDays(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
                    </button>
                    <h1 className="currentDay">{currentDay(date)}  </h1>
                    <button className="addDays-btn" onClick={() => addDays(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
                    </button>
                </div>
            </div>

            <Row>
                <Col md={9}>
                    <Section1 addDays={addDays} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} tasks={tasks} date={date} />
                </Col>
                <Col md={3} >
                    <Section2 />
                </Col>
            </Row>

        </div>
    )
}



export default RightPanel
import './TodoTask.css'
import React, { FC } from "react"
import { time } from "../../../../utils/dateFormater"
import { Row, Col, Container, Collapse } from 'react-bootstrap'



type Props = TaskProps & {
    updateTask: (task: ITask) => void
    deleteTask: (_id: string) => void
}


const categoryImg = (category: string) => {
    if (category === 'workout') return 'category-icon workout'
    if (category === 'work') return 'category-icon work'
    if (category === 'social') return 'category-icon social'
    if (category === 'health') return 'category-icon health'
    return 'category-icon other'
}


const Task: FC<Props> = ({ task, updateTask, deleteTask }) => {

    return (
        <div className="eachTask">

            <div className={task.status === 'toDo' ? "task" : "completedTask"}>

                <Row className="taskInfo">
                    <Col md={1}><div className={categoryImg(task.category)}></div></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={10} className="taskTitle">
                                <h2>{task.taskName}</h2>
                                <p>{task.description}</p>
                            </Col>
                            <Col md={2} className="hour-update-delete">
                                <h3>{time(task.deadline)}</h3>
                                <img className="check" src="/img/check.png" alt="check" onClick={() => updateTask(task)} />
                                <img className="trash" src="/img/delete.png" alt="bin" onClick={() => deleteTask(task._id)} />

                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>

        </div >
    )
}



export default Task
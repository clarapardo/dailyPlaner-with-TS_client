interface ITask {
    _id: string
    taskName: string
    deadline: object
    category: string
    description: string
    status: string
    createdAt?: string
    updatedAt?: string
}

interface TaskProps {
    task: ITask
}

type ApiDataType = {
    message: string
    status: string
    tasks: ITask[]
    task?: ITask
}
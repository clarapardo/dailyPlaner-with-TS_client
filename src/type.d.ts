interface ITask {
    _id: string
    taskName: string
    deadline: Date
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
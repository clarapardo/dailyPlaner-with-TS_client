import axios, { AxiosResponse } from "axios"

const baseUrl: string = "https://tasksplaner.herokuapp.com/api"



export const getTasks = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const tasks: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/all")
        return tasks

    } catch (error) {
        throw error
    }
}


export const addTask = async (formData: ITask): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const task: Omit<ITask, '_id'> = {
            taskName: formData.taskName,
            deadline: formData.deadline,
            description: formData.description,
            category: formData.category,
            status: 'toDo',
        }

        const saveTask: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/add", task)
        return saveTask

    } catch (error) {
        throw error
    }
}


export const updateTask = async (task: ITask): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const taskUpdate: Pick<ITask, 'status'> = {
            status: 'completed',
        }
        const updatedTask: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/update/${task._id}`, taskUpdate)
        return updatedTask

    } catch (error) {
        throw error
    }
}


export const deleteTask = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTask: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/delete/${_id}`)
        return deletedTask

    } catch (error) {
        throw error
    }
}





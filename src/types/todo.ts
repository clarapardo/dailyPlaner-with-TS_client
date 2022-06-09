import { Document } from "mongoose"

export interface ITodo extends Document {
    taskName: string
    deadline: string 
    category: string,
    description: string

}
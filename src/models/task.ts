import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
    {
        taskName: { type: string, required: true },
        deadline: string,
        category: { type: string, default: "Other" },
        description: string,
        status: { type: boolean, default: true }
    },
    { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)
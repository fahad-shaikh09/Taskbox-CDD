import React from "react"
import AddTask from "../components/AddTask";

export default {
    title: "Add-Task",
    component: AddTask,
} 

export function TaskAddition() {

    const tasks=[{input:"ABC", status:"true"}]
    return (
        <AddTask tasks={tasks} SetTasks={SetTasks}/>
    )
}


const SetTasks = () => {
    console.log("Task is set")
}

export function Completed() {
    const input1=[{input:"ABC", status:"true"}]
    return (
        <AddTask tasks={input1} SetTasks={SetTasks}/>
    )

}

export function NotCompleted() {
    const input2=[{input:"XYZ", status:"false"}]
    return (
        <AddTask tasks={input2} SetTasks={SetTasks}/>
    )

}
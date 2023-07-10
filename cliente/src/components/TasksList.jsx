import { useEffect, useState } from "react"
import { getAllTasks } from "../api/Tasks.api"
import {TasksCard} from "./tasksCard";


export function TasksList(){
    const [verUser, updateUser] =  useState([]);

    useEffect(() =>{
        async function loadTasks() {
            const res = await getAllTasks()
            updateUser(res.data);
        }
        loadTasks(); 
    }, []);

    
    return <div>
        {verUser.map(verUser => (
            <TasksCard key={verUser.id}  verUser={verUser} />
        ))}
    </div>;       
}
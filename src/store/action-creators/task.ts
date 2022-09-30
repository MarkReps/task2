import { Dispatch } from "redux"
import { ICreateTask, ITask, TaskAction, TaskActionType } from "../../types/task"

export const deleteTask = (taskId:number) =>{
    return (dispatch:Dispatch<TaskAction>) =>{
        try{
            dispatch({type:TaskActionType.DELETE_ACTION,payload:taskId})
        } catch(error){
            console.error(error)
        }
    }
}

export const archiveTask = (taskId:number) =>{
    return (dispatch:Dispatch<TaskAction>) =>{
        try{
            dispatch({type:TaskActionType.ARCHIVE_ACTIVE,payload:taskId})
        } catch(error){
            console.error(error)
        }
    }
}

export const createTask = (task:ICreateTask) =>{
    return (dispatch:Dispatch<TaskAction>) =>{
        try{
            dispatch({type:TaskActionType.CREATE_ACTION,payload:task})
        } catch(error){
            console.error(error)
        }
    }
}

export const editTask = (task:ITask) =>{
    return (dispatch:Dispatch<TaskAction>) =>{
        try{
            dispatch({type:TaskActionType.EDIT_ACTION,payload:task})
        } catch(error){
            console.error(error)
        }
    }
}
import {ICreateTask, ITask, ITaskState,TaskAction, TaskActionType} from '../../types/task';

const initialState:ITaskState = {
    tasks:[{
      "id":0,
      "name": "Shopping List",
      "created": "Fri Sep 16 2022",
      "category": "Task",
      "content": "Tomatoes,bread",
      "dates": "",
      "active":true,
    },
    {
      "id":1,
      "name": "The theory of evolution",
      "created": "Tues April 27 2021",
      "category": "Random Thought",
      "content": "The evolution ...",
      "dates": "",
      "active":true,
    },
    {
      "id":2,
      "name": "New Feature",
      "created": "Wed May 5 2021",
      "category": "Idea",
      "content": "Implements new ...",
      "dates": "2022-09-01, 2022-09-02",
      "active":true,
    },
    {
      "id":3,
      "name": "William Gaddis",
      "created": "Wed May 5, 2021",
      "category": "Quote",
      "content": "Power doesn`t considered",
      "dates": "",
      "active":false,
    },
    {
      "id":4,
      "name": "Books",
      "created": "Thurs May 15, 2021",
      "category": "Task",
      "content": "The Lean Startup",
      "dates": "",
      "active":false,
    },
    {
      "id":5,
      "name": "Books",
      "created": "Thurs May 22, 2021",
      "category": "Quote",
      "content": "The Lean Startup",
      "dates": "",
      "active":false,
    },
    {
      "id":6,
      "name": "Books",
      "created": "Thurs May 29, 2021",
      "category": "Idea",
      "content": "The Lean Startup",
      "dates": "",
      "active":true,
    }
],
    currId:7
}

const checkDate = (content:string) =>{
  const regular = /\d{1,2}\/\d{1,2}\/\d{1,4}/g;
  const datesfromContent = content.match(regular)?.join(', ');
  const dates = datesfromContent ? datesfromContent : ""
  return dates;
}

const findIndex = (tasks:ITask[],taskId:number) =>{
  const tasktoEdit = tasks.filter(t => t.id === taskId)
  return tasks.indexOf(tasktoEdit[0]);
}

const archive = (tasks:ITask[],taskId:number) =>{
  const copyTasks = [...tasks]
  const index = findIndex(copyTasks,taskId)
  copyTasks[index].active = !copyTasks[index].active
  return copyTasks;
}

const create = (currId:number,task:ICreateTask) =>{
  const created  = new Date(Date.now()).toDateString();

  return {...task,id:currId,created:created,dates:checkDate(task.content),active:true}
}

const edit = (tasks:ITask[],task:ITask) =>{
  const copyTasks = [...tasks]
  
  const index = findIndex(copyTasks,task.id);
  copyTasks[index] = {...task,dates:checkDate(task.content)};
  return copyTasks;
}

export const taskReducer = (state=initialState,action:TaskAction):ITaskState =>{
    switch(action.type){
      case TaskActionType.DELETE_ACTION:
        return {...state,tasks:state.tasks.filter(task => task.id !== action.payload)}
      case TaskActionType.ARCHIVE_ACTIVE:
        return {...state, tasks:archive(state.tasks,action.payload)}
      case TaskActionType.CREATE_ACTION:
        return {...state,currId:state.currId+1,tasks:[...state.tasks,create(state.currId,action.payload)]}
      case TaskActionType.EDIT_ACTION:
        return {...state,tasks:edit(state.tasks,action.payload  )}
      default:
        return {...state};
    }
}
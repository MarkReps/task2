export enum TaskActionType{
    CREATE_ACTION = 'CREATE_ACTION',
    EDIT_ACTION = 'EDIT_ACTION',
    ARCHIVE_ACTIVE = 'ARCHIVE_ACTIVE',
    DELETE_ACTION = 'DELETE_ACTION',
}

interface ICreateAction{
    type: TaskActionType.CREATE_ACTION;
    payload:ICreateTask;
}

interface IEditAction{
    type:TaskActionType.EDIT_ACTION;
    payload:ITask;
}

interface IArchiveAction{
    type:TaskActionType.ARCHIVE_ACTIVE;
    payload:number;
}

interface IDeleteAction{
    type:TaskActionType.DELETE_ACTION;
    payload:number;
}

export interface ITask{
    id:number;
    name:string;
    created:string;
    category:string;
    content:string;
    dates:string;
    active:boolean;
}

export interface ICreateTask{
    name: string;
    content:string;
    category:string;
}

export interface ITaskState{
    tasks: ITask[];
    currId:number;
}

export type TaskAction = ICreateAction | IEditAction | IArchiveAction | IDeleteAction;
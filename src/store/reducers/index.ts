import {combineReducers} from 'redux';
import { taskReducer } from './taskState';


export const rootReducer = combineReducers({tasks:taskReducer})


export type RootState = ReturnType<typeof rootReducer>
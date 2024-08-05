import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';

export interface TaskState {
  taskDetails: any;
  error: any;
}

export const initialState: TaskState = {
  taskDetails: null,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTaskDetailsSuccess, (state, { taskDetails }) => ({
    ...state,
    taskDetails
  })),
  on(TaskActions.loadTaskDetailsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

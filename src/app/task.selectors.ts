import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTaskDetails = createSelector(
  selectTaskState,
  (state: TaskState) => state.taskDetails
);

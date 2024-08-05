import { createAction, props } from '@ngrx/store';

export const loadTaskDetails = createAction(
  '[Task] Load Task Details',
  props<{ taskId: string }>()
);

export const loadTaskDetailsSuccess = createAction(
  '[Task] Load Task Details Success',
  props<{ taskDetails: any }>()
);

export const loadTaskDetailsFailure = createAction(
  '[Task] Load Task Details Failure',
  props<{ error: any }>()
);

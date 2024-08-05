import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  loadTaskDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTaskDetails),
      mergeMap(action =>
        // Replace with your service call
        of(this.mockTaskDetails(action.taskId)).pipe(
          map(taskDetails => TaskActions.loadTaskDetailsSuccess({ taskDetails })),
          catchError(error => of(TaskActions.loadTaskDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}

  // Mock service call
  mockTaskDetails(taskId: string) {
    const tasksDetails = [
      { title: 'Billing', status: 'Open', priority: 'High', dueDate: '2024-08-10', startDate: '2024-08-05', id: '1', assignedTo: 'shubham', description: 'Complete the billing process for the month of August.' },
      { title: 'Pharmacy', status: 'In Progress', priority: 'Medium', dueDate: '2024-08-15', startDate: '2024-08-05', id: '2', assignedTo: 'shubham', description: 'Update the inventory for the pharmacy department.' },
      { title: 'AI Configuration', status: 'Completed', priority: 'Low', dueDate: '2024-08-20', startDate: '2024-08-05', id: '3', assignedTo: 'shubham', description: 'Configure the AI system for the new project.' },
      { title: 'Admin Dashboard', status: 'Open', priority: 'High', dueDate: '2024-08-25', id: '4', startDate: '2024-08-05', assignedTo: 'Bob Brown', description: 'Develop the admin dashboard for the application.' }
    ];
    return tasksDetails.find(task => task.id === taskId);
  }
}

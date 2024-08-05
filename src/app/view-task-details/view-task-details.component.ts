import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-view-task-details',
  standalone: true,
  imports: [CommonModule, DividerModule,],
  templateUrl: './view-task-details.component.html',
  styleUrls: ['./view-task-details.component.scss']
})
export class ViewTaskDetailsComponent implements OnInit {

  taskId: string;
  taskDetails: any;
  tasksDetails = [
    { title: 'Billing', status: 'Open', priority: 'High', dueDate: '2024-08-10', startDate: '2024-08-05', id: '1', assignedTo: 'shubham', description: 'Complete the billing process for the month of August.' },
    { title: 'Pharmacy', status: 'In Progress', priority: 'Medium', dueDate: '2024-08-15', startDate: '2024-08-05', id: '2', assignedTo: 'shubham', description: 'Update the inventory for the pharmacy department.' },
    { title: 'AI Configuration', status: 'Completed', priority: 'Low', dueDate: '2024-08-20', startDate: '2024-08-05', id: '3', assignedTo: 'shubham', description: 'Configure the AI system for the new project.' },
    { title: 'Admin Dashboard', status: 'Open', priority: 'High', dueDate: '2024-08-25', id: '4', startDate: '2024-08-05', assignedTo: 'Bob Brown', description: 'Develop the admin dashboard for the application.' }
  ];

  constructor(
    public dialogRef: MatDialogRef<ViewTaskDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.taskId = data.taskId;
  }
  ngOnInit() {
    this.taskDetails = this.tasksDetails.find(task => task.id === this.taskId);
  }

  closeViewTaskDetails() {
    this.dialogRef.close();

  }
}

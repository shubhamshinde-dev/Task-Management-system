import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskDetailsComponent } from '../view-task-details/view-task-details.component';
import { EdittaskDetailsComponent } from '../edittask-details/edittask-details.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-task-management-table',
  standalone: true,
  imports: [CommonModule, TableModule,],
  templateUrl: './task-management-table.component.html',
  styleUrl: './task-management-table.component.scss'
})
export class TaskManagementTableComponent {
  mockTest:boolean=true
  
  tasks = [
    { title: 'Biling', status: 'Open', priority: 'High', dueDate: '2024-08-10',startDate: '2024-08-05', id: '1' },
    { title: 'Pharmacy', status: 'In Progress', priority: 'Medium', dueDate: '2024-08-15',startDate: '2024-08-05', id: '2' },
    { title: 'AI Configuration', status: 'Completed', priority: 'Low', dueDate: '2024-08-20',startDate: '2024-08-05', id: '3' },
    { title: 'Admin Dashboard', status: 'Open', priority: 'High', dueDate: '2024-08-25',startDate: '2024-08-05', id: '4' }
  ];
  http: any;

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {

    
    if (!this.mockTest) {
      this.mockTestData();
    }
  }
  
  mockTestData() {
    this.http.get(`/api_service`).subscribe((res: any) => {
      this.tasks = res.data;
    });
  }

  viewDialog(taskId: any) {
    if (this.dialog.openDialogs.length === 0) {
      const dialogRef = this.dialog.open(ViewTaskDetailsComponent, {
        width: '70%',
        position: { left: '20%' },
        data: {taskId},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        
      });
    }
  }
  addDialog(add: any) {
    if (this.dialog.openDialogs.length === 0) {
      const dialogRef = this.dialog.open(EdittaskDetailsComponent, {
        width: '70%',
        position: { left: '20%' },
        data: { add },
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const newTask = {
            title: result.taskData.module || '',
            status: result.taskData.status || '',
            priority: result.taskData.priority || '',
            dueDate: result.taskData.endDate || '',
            startDate: result.taskData.startDate || '',
            id: (this.tasks.length + 1).toString() 
          };
  
          this.tasks.push(newTask);
        }
        console.log(result);
      });
    }
  }
  
  
  
  editDialog(taskId: any) {
    if (this.dialog.openDialogs.length === 0) {
      const dialogRef = this.dialog.open(EdittaskDetailsComponent, {
        width: '70%',
        position: { left: '20%' },
        data: {taskId},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result.buttonType === 'update') {
          this.updateTaskData(result.taskId, result.taskData);
        }
        if (result.buttonType === 'delete') {
          this.deleteTaskData(result.taskId);
        }
      });
    }
  }
  updateTaskData(taskId: string, updatedData: any) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedData };
    }
  }
  deleteTaskData(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    console.log('Updated tasks after deletion:', this.tasks);
  }
}

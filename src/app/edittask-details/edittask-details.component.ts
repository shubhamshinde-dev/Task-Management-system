import { Component, Inject } from '@angular/core';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmationService } from '../delete-confirmation.service';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-edittask-details',
  standalone: true,
  imports: [
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    CalendarModule
  ],
  providers: [MatNativeDateModule],
  templateUrl: './edittask-details.component.html',
  styleUrls: ['./edittask-details.component.scss']
})
export class EdittaskDetailsComponent {
  taskId: string;
  taskDetails: any;
  editTask!: FormGroup;
  mockTest: boolean = true
  tasksDetails = [
    { title: 'Billing', status: 'Open', priority: 'High', dueDate: '2024-08-10', startDate: '2024-08-05', id: '1', assignedTo: 'shubham', description: 'Complete the billing process for the month of August.' },
    { title: 'Pharmacy', status: 'In Progress', priority: 'Medium', dueDate: '2024-08-15', startDate: '2024-08-05', id: '2', assignedTo: 'shubham', description: 'Update the inventory for the pharmacy department.' },
    { title: 'AI Configuration', status: 'Completed', priority: 'Low', dueDate: '2024-08-20', startDate: '2024-08-05', id: '3', assignedTo: 'shubham', description: 'Configure the AI system for the new project.' },
    { title: 'Admin Dashboard', status: 'Open', priority: 'High', dueDate: '2024-08-25', startDate: '2024-08-05', id: '4', assignedTo: 'Bob Brown', description: 'Develop the admin dashboard for the application.' }
  ];
  http: any;

  constructor(
    public dialogRef: MatDialogRef<EdittaskDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dialog: MatDialog,
    private deleteConfirmationService: DeleteConfirmationService
  ) {
    this.taskId = data.taskId;
  }
  showAddBtn: boolean = false
  ngOnInit() {
    console.log('Dialog data:', this.data)
    if (this.data = 'add') {
      this.showAddBtn = true

    }
    this.editTask = this.fb.group({
      module: [''],
      status: [''],
      priority: [''],
      startDate: [''],
      endDate: [''],
      assignTo: [''],
      description: [''],
      assignTo2: ['']
    });
    this.taskDetails = this.tasksDetails.find(task => task.id === this.taskId);
    if (this.taskDetails) {
      this.editTask.patchValue({
        module: this.taskDetails.title,
        status: this.taskDetails.status,
        priority: this.taskDetails.priority,
        startDate: this.taskDetails.startDate,
        endDate: this.taskDetails.dueDate,
        assignTo: this.taskDetails.assignedTo,
        description: this.taskDetails.description,
        endDate2: this.taskDetails.dueDate,
        assignTo2: this.taskDetails.assignedTo
      })
    }
  }


  onClose(): void {
    this.dialogRef.close({ taskId: this.data.taskId, taskData: this.editTask.value });
  }

  onUpdate(buttonType: string): void {
    this.deleteConfirmationService.update(this.editTask.value);
    this.dialogRef.close({ taskId: this.data.taskId, taskData: this.editTask.value, buttonType });
  }
  onAdd(buttonType: string){
    this.dialogRef.close({ taskId: this.data.taskId, taskData: this.editTask.value, buttonType });
  }
  onDelete(buttonType: string): void {

    this.deleteConfirmationService.deleteTask(this.editTask.value);
    this.dialogRef.close({ taskId: this.data.taskId, taskData: this.editTask.value, buttonType });
  }
  // if (!this.mockTest) {
  //   // const payload = this.editTask.value;
  //   // this.http.post('/api_service', payload).subscribe(
  //   //   (res: any) => {
  //   //   },
  //   //   (error: any) => {
  //   //   }
  //   // );


  // }

}

import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DeleteConfirmationService {
  http: any;
  mockTest: boolean = true
  @Output() taskDeleted: EventEmitter<string> = new EventEmitter<string>();
  constructor(private dialog: MatDialog) { }

  deleteTask(taskId: string): void {
    const confirmation = window.confirm('Do you really want to delete this task?');
    if (confirmation) {
      if (confirmation) {
        this.taskDeleted.emit(taskId);
        if (!this.mockTest) {
          const payload = JSON.stringify(taskId);
          this.http.post('/api_service', payload).subscribe(
            (res: any) => {
            },
            (error: any) => {
            }
          );
        }

      }
    } else {

    }
  }

  update(Payload: any): void {
    const confirmation = window.confirm('Do you really want to update this task?');
    if (confirmation) {
      if (!this.mockTest) {
        const payload = JSON.stringify(Payload);
        this.http.post('/api_service', payload).subscribe(
          (res: any) => {
          },
          (error: any) => {
          }
        );
      }
    }
  }




}

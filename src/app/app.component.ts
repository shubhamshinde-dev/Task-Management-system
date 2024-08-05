import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagementTableComponent } from "./task-management-table/task-management-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskManagementTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task-Management-system';
}

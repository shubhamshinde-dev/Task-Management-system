import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementTableComponent } from './task-management-table.component';

describe('TaskManagementTableComponent', () => {
  let component: TaskManagementTableComponent;
  let fixture: ComponentFixture<TaskManagementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

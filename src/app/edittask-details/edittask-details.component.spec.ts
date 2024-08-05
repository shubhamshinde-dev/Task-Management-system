import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskDetailsComponent } from './edittask-details.component';

describe('EdittaskDetailsComponent', () => {
  let component: EdittaskDetailsComponent;
  let fixture: ComponentFixture<EdittaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittaskDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdittaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

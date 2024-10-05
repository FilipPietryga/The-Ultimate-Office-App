import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { Task } from './task.model';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let mockTask: Task;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    mockTask = { id: 1, title: 'Test Task', deadline: '2024-12-31', priority: 'high', completed: false, urgent: false };
    component.task = mockTask;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggle event when onToggle is called', () => {
    spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).toHaveBeenCalledWith(mockTask.id);
  });

  it('should emit delete event when onDelete is called', () => {
    spyOn(component.delete, 'emit');
    component.onDelete();
    expect(component.delete.emit).toHaveBeenCalledWith(mockTask.id);
  });

  it('should emit urgent event when onUrgent is called', () => {
    spyOn(component.urgent, 'emit');
    component.onUrgent();
    expect(component.urgent.emit).toHaveBeenCalledWith(mockTask.id);
  });

  it('should display task title in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-title')?.textContent).toContain(mockTask.title);
  });

  
  it('should display task deadline in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-deadline')?.textContent).toContain(mockTask.deadline);
  });

  
  it('should display task priority in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-priority')?.textContent).toContain(mockTask.priority);
  });
});

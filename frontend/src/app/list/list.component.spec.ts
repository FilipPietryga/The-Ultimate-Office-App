import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ListService } from './list.service';
import { Task } from './task/task.model';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listService: jasmine.SpyObj<ListService>;

  const mockTasks: Task[] = [
    { id: 1, title: 'Test Task 1', deadline: '2024-12-31', priority: 'high', completed: false, urgent: false },
    { id: 2, title: 'Test Task 2', deadline: '2024-12-31', priority: 'medium', completed: false, urgent: false },
  ];

  beforeEach(async () => {
    const listServiceSpy = jasmine.createSpyObj('ListService', ['getListElements', 'addListElement', 'toggleListElement', 'deleteListElement', 'urgentListElement']);

    await TestBed.configureTestingModule({
      imports: [ListComponent, FormsModule, TaskComponent],
      providers: [
        { provide: ListService, useValue: listServiceSpy }
      ]
    }).compileComponents();

    listService = TestBed.inject(ListService) as jasmine.SpyObj<ListService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    listService.getListElements.and.returnValue(mockTasks);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with tasks from the service', () => {
    expect(component.tasks).toEqual(mockTasks);
  });

  it('should add a new task', () => {
    const newTask = { title: 'New Task', deadline: '2024-01-01', priority: 'low' };
    component.title = newTask.title;
    component.deadline = newTask.deadline;
    component.priority = newTask.priority;
    listService.addListElement.and.callFake(() => mockTasks.push({ ...newTask, id: 3, completed: false, urgent: false }));
    
    component.addItem();
    expect(listService.addListElement).toHaveBeenCalledWith(newTask.title, newTask.deadline, newTask.priority);
    expect(component.tasks.length).toBe(3);
  });

  it('should toggle a task', () => {
    const taskId = 1;
    component.toggleItem(taskId);
    expect(listService.toggleListElement).toHaveBeenCalledWith(taskId);
    expect(listService.getListElements).toHaveBeenCalled();
  });

  it('should delete a task', () => {
    const taskId = 1;
    component.deleteItem(taskId);
    expect(listService.deleteListElement).toHaveBeenCalledWith(taskId);
    expect(listService.getListElements).toHaveBeenCalled();
  });

  it('should mark a task as urgent', () => {
    const taskId = 1;
    component.urgentItem(taskId);
    expect(listService.urgentListElement).toHaveBeenCalledWith(taskId);
    expect(listService.getListElements).toHaveBeenCalled();
  });
});

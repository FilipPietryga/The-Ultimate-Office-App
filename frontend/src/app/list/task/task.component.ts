import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent {
  @Input() task: Task = { id: 0, title: "clean the room", deadline: "01.10.2024", priority: "important", completed: false, urgent: false }
  @Output() toggle = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()
  @Output() urgent = new EventEmitter<number>()

  onToggle() {
    this.toggle.emit(this.task.id)
  }

  onDelete() {
    this.delete.emit(this.task.id)
  }

  onUrgent() {
    this.urgent.emit(this.task.id)
  }
}

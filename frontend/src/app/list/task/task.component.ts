import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'item',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class ItemComponent {
  @Input() item: Task = { id: 0, title: "clean the room", deadline: "01.10.2024", priority: "important", completed: false, urgent: false }
  @Output() toggle = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()
  @Output() urgent = new EventEmitter<number>()

  onToggle() {
    this.toggle.emit(this.item.id)
  }

  onDelete() {
    this.delete.emit(this.item.id)
  }

  onUrgent() {
    this.urgent.emit(this.item.id)
  }
}

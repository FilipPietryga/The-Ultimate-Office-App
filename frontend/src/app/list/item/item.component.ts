import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.sass'
})
export class ItemComponent {
  @Input() item: Item = { id: 0, title: "", completed: false }
  @Output() toggle = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  onToggle() {
    this.toggle.emit(this.item.id)
  }

  onDelete() {
    this.delete.emit(this.item.id)
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListElement } from './list-element.model';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [],
  templateUrl: './list-element.component.html',
  styleUrl: './list-element.component.sass'
})
export class ListElementComponent {
  @Input() item: ListElement
  @Output() toggle = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  onToggle() {
    this.toggle.emit(this.item.id)
  }

  onDelete() {
    this.delete.emit(this.item.id)
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item } from './item/item.model';
import { ListService } from './list.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, CommonModule, ItemComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass' 
})
export class ListComponent implements OnInit {
  items: Item[] = []
  title = ''
  deadline = ''
  priority = ''

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.items = this.listService.getListElements()
  }

  addItem() {
    if(this.title.trim()) {
      this.listService.addListElement(this.title, this.deadline, this.priority)
      this.title = ''
      this.items = this.listService.getListElements()
    }
  }

  toggleItem(id: number) {
    this.listService.toggleListElement(id)
    this.items = this.listService.getListElements()
  }
  
  deleteItem(id: number) {
    this.listService.deleteListElement(id)
    this.items = this.listService.getListElements() 
  }
  
  urgentItem(id: number) {
    this.listService.urgentListElement(id)
    this.items = this.listService.getListElements()
  }
}

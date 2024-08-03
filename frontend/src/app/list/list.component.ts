import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListElement } from '../list-item/list-element.model';
import { ListService } from './list.service.ts';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements OnInit {
  items: ListElement[] = []
  newTitle = ''

  constructor(private listService: ListService) {}

  OnInit() {
    this.items = this.listService.getListElements()
  }

  addItem() {
    if(this.newTitle.trim()) {
      this.listService.addListElement(this.newTitle)
      this.newTitle = ''
      this.items = this.listService.getListElements()
    }
  }

  toggleItem(id: number) {
    this.listService.toggleListElement(id)
    this.items = this.listService.getListElements()
  }
}

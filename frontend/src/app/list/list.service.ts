import { Injectable } from '@angular/core';
import { ListElement } from '../list-item/list-element.model'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private ListElements: ListElement[] = [];
  private currentId = 1

  constructor() { }

  getListElements() {
    return this.ListElements
  }

  addListElement(title: string) {
    const newElement: ListElement = {id: this.currentId, title: title, completed: false}
    this.ListElements.push(newElement);
  }

  toggleListElement(id: number) {
    const listElement = this.ListElements.find(item => item.id == id) //find list element with a given id
    if(listElement) {
      listElement.completed = !listElement.completed
    }
  }
}

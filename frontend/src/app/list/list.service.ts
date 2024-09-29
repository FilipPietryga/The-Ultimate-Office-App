import { Injectable } from '@angular/core';
import { Item } from './item/item.model'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items: Item[] = []
  private id = 1

  constructor() { }

  getListElements() {
    return this.items
  }

  addListElement(title: string) {
    const newElement: Item = {id: this.id, title: title, completed: false}
    this.items.push(newElement)
    this.id += 1
  }

  toggleListElement(id: number) {
    const listElement = this.items.find(item => item.id == id)
    if(listElement) {
      listElement.completed = !listElement.completed
    }
  }
  
  deleteListElement(id: number) {
    console.log("delete")
    const newList = this.items.filter(item => item.id != id)
    this.items = newList
  }
}

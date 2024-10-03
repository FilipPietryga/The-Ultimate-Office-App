import { Injectable } from '@angular/core';
import { Task } from './task/task.model'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items: Task[] = []
  private id = 1

  constructor() { }

  getListElements() {
    return this.items
  }

  addListElement(title: string, deadline: string, priority: string) {
    const newElement: Task = {id: this.id, title: title, priority: priority, completed: false, urgent: false, deadline: deadline}
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

  urgentListElement(id: number) {
    const listElement = this.items.find(item => item.id == id)
    if(listElement) {
      listElement.urgent = !listElement.urgent
    }
  }
}

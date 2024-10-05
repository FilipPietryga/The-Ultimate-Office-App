import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Task } from './task/task.model'
import { ListService } from './list.service'
import { CommonModule } from '@angular/common'
import { TaskComponent } from './task/task.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'list',
  standalone: true,
  imports: [RouterModule, CommonModule, TaskComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass' 
})
export class ListComponent implements OnInit {
  tasks: Task[] = []
  title = ''
  deadline = ''
  priority = ''

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.tasks = this.listService.getListElements()
  }

  addItem() {
    if(this.title.trim()) {
      this.listService.addListElement(this.title, this.deadline, this.priority)
      this.title = ''
      this.deadline = ''
      this.priority = ''
    } else {
      this.listService.addListElement('clean your desk', '01-01-1999', 'urgent') // for testing purposes
    }
    this.tasks = this.listService.getListElements()
  }

  toggleItem(id: number) {
    this.listService.toggleListElement(id)
    this.tasks = this.listService.getListElements()
  }
  
  deleteItem(id: number) {
    this.listService.deleteListElement(id)
    this.tasks = this.listService.getListElements() 
  }
  
  urgentItem(id: number) {
    this.listService.urgentListElement(id)
    this.tasks = this.listService.getListElements()
  }
}

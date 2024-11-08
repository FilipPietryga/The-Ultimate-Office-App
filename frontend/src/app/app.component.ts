import { Component } from '@angular/core'
import { NavbarComponent } from './navbar/navbar.component'
import { ListComponent } from './list/list.component'
import { CalendarComponent } from './calendar/calendar.component'
import { BoardComponent } from './board/board.component'
import { CommonModule } from '@angular/common'
import { RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, NavbarComponent, ListComponent, CalendarComponent, BoardComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
}

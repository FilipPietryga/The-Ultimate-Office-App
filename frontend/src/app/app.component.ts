import { Component } from '@angular/core'
import { MenuComponent } from './menu/navbar.component'
import { ListComponent } from './list/list.component'
import { CallendarComponent } from './callendar/callendar.component'
import { CanbanComponent } from './canban/canban.component'
import { CommonModule } from '@angular/common'
import { RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, MenuComponent, ListComponent, CallendarComponent, CanbanComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'frontend'
}

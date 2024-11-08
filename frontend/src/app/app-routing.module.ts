import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './list/list.component'
import { CalendarComponent } from './calendar/calendar.component'
import { BoardComponent } from './board/board.component'
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', redirectTo: '/menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

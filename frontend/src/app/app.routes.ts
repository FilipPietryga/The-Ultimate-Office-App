import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CallendarComponent } from './callendar/callendar.component';
import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'callendar', component: CallendarComponent },
  { path: 'board', component: BoardComponent },
]

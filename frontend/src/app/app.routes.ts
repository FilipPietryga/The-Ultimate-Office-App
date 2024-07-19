import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CallendarComponent } from './callendar/callendar.component';
import { CanbanBoardComponent } from './canban-board/canban-board.component';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'callendar', component: CallendarComponent },
  { path: 'canban-board', component: CanbanBoardComponent },
];

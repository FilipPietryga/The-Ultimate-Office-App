import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './list/list.component'
import { CallendarComponent } from './callendar/callendar.component'
import { CanbanComponent } from './canban/canban.component'

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'callendar', component: CallendarComponent },
  { path: 'canban', component: CanbanComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

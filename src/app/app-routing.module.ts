import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from "./blog/blog.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { EventsComponent } from "./events/events.component"

const routes: Routes = [
  {path:'', redirectTo:"dashboard" ,pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'blog', component:BlogComponent},
  {path:'events', component:EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

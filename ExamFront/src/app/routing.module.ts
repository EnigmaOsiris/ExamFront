import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
    {path:'',
    component:HomeComponent},
    {path:'employees',
    component:EmployeesComponent},
    {path:'groups',
    component:GroupsComponent},
    {path:'**',
    redirectTo:''
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
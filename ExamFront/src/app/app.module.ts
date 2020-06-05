import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { GroupsComponent } from './groups/groups.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import {NgDragDropModule} from 'ng-drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    GroupsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [DatePipe,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

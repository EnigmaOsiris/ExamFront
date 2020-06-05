import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import {DatePipe} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  form:FormGroup;

  rows = [];
  temp = [];
  columns = [{ name: 'name' },{prop:'last_name'},{name:'birthday'}];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  ColumnMode = ColumnMode;

  // 
  constructor(private api: ApiService, private dp:DatePipe, private builder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.form= this.builder.group({
      name:new FormControl("",[Validators.required, Validators.maxLength(30)]),
      last_name:new FormControl("",[Validators.required, Validators.maxLength(30)]),
      birthday:new FormControl("",[Validators.required])
    })   
    this.loadEmployees(); 
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSubmit() {
    if (this.form.invalid) {
      alert("Verifique los campos");
      return;
    }
    this.api.addEmployee({      
      name:this.form.get("name").value,
      last_name:this.form.get("last_name").value,
      birthday:this.form.get("birthday").value
    }).subscribe(data=>{
      alert("Empleado Guardado");
      this.form.reset();
      this.loadEmployees();      
    })

    // alert(this.form.get("birthday").value);
  }

  loadEmployees(){
    this.api.getAllEmployees().subscribe(employees=> {
      
      console.log(employees);
      let em=employees.map(e=>{
        e.birthday=this.dp.transform(e.birthday, "yyyy/MM/dd");
        return e;
      })
      console.log(em);
      this.temp=[...em];
      this.rows=em;
    });
  }

}

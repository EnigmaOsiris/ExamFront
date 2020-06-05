import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../models/Group';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups:Group[]=[];
  query:string;
  employees:Employee[]=[];
  groupsAdds=[];
  groupName="";
  groupSelected=true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(){
    this.api.getAllGroups().subscribe(groups=> {
      this.groups=groups;        
    });
  }
  onItemDrop(e: any) {
    let group:Group=e.dragData
    if (!this.groupsAdds.includes(group.id)) {
      this.groupName=group.name;
      this.loadEmployeesByGroupId(group.id);
      this.groupsAdds.push(group.id);
    }
  }

  setStatus(){
    this.employees.map(e=>{
      e.isSelected=this.groupSelected;
      return e;
    })
  }

  loadEmployeesByGroupId(id){
    
    this.api.getEmployeesByGroup(id).subscribe(employees=>{
      this.employees=this.employees.concat(employees)
      console.log(employees);
      this.setStatus();      
    },error=>{
      alert("No existen empleados")
    }
    )

  }

  printSelected(){
    console.log(this.employees.filter(e=>e.isSelected));
    
  }

  reset(){
    this.employees=[];
    this.groupsAdds=[];
  }

}

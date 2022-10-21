import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor(private testservice:TestService) { }

  users:User[]=[];
  filterText:string ='';
  ngOnInit(): void {
  }

  printdata(event:any){
    this.testservice.getUsersData().subscribe(users=>{
      this.users = users;
  });
}
}
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  users:User[]=[];
  constructor(private testservice:TestService) { }

  ngOnInit(): void {
  }
  printdata(event:any){
    this.testservice.getUsersData().subscribe(users=>{
      this.users = users;
  });
}
}

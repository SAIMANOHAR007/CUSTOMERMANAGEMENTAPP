import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

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

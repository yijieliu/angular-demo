import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  con;
  arrD =[1,2,3,4,5];
  getI(e){
    this.con=e
  }
  click(){
    this.arrD[0] =1111;
  }
}

import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  //providers:[]
})
export class AComponent implements OnInit {
  //getdata =new GetdataService();
  list;
  constructor(public getdata:GetdataService) {}
  @Input() arrData:Array<any>;
  @Output() getIndex= new EventEmitter();
  ngOnChanges(){
    console.log(0);
  }
  num:number;
  ngOnInit() {
    //console.log(1);
    this.getdata.addData(300);
    this.getdata.addData(100);
    console.log(this.getdata.list);
  }
  ngDoCheck(){
    console.log(2);
  }
  fn(i){
    //this.getIndex.emit(i);
    this.getdata.getIndex(i);
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }
  
  list=[];
  //get(url:number){
    //$.ajax({
      //url:url,
      //type:
     // return url +100;
   // }
    addData(num:number){
      this.list.push(num);
    }

    index:number;
    getIndex(i){
      this.index =i;
    }
}

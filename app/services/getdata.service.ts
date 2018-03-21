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

    index:number=0;
    getIndex(i){
      this.index =i;
    }
    /*list:any;
    addData(key:string,data:any){
      localStorage.setItem(key,data);
    }
    showData(key){
      this.list=localStorage.getItem(key);
      return this.list;
    }*/


}

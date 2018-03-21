import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {
  
  /*todo=this.get('todo');
  done=this.get('done');*/
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
  
   /* get(str){
        console.log('get');
        var arr = JSON.parse(localStorage.getItem(str))  || [];
        return arr;
      }
      set(key,val){
        // localStorage.clear();
        console.log('set');
        localStorage.setItem(key,JSON.stringify(val));
        console.log('ser-todo:',this.todo);
        console.log('ser-done:',this.done);
      }*/

}

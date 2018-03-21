import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  head_data=[];
    getData(event){
      this.head_data.push(event);
    }
  constructor(public get:GetdataService){
  
  }
  index:number;
  ngOnInit(){
    this.index =this.get.index;
    
  }
  /*head_data=[];
  getData(event){
    this.getlocaldata.addData('d1',this.head_data);
  }
  constructor(public getlocaldata:GetdataService){
  }
    data;
    ngOnInit(){
      this.data =(this.getlocaldata.showData('d1')).split(',');
      if(this.data!=''){
           this.head_data=this.data;
      }
      
    }*/
  
  /*hehehe=[1,2,3,4];
  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  fn(){
    console.log(123);
  }
  // ngSwitch
  //fruit:any="苹果"；不必勾选默认显示苹果
  fruit:any;
  changeFruit(v){
    console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  // todolist
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  data:string;
  dataArr=[];
  dataA=[];


  add(){
    this.dataArr.push(this.data);
    this.data='';
  }
  changeData(i){
    this.dataA.push(this.dataArr[i]);
    this.dataArr.splice(i,1);
  }*/
   
   /*arrD=[1,2,3,4,5,6];
   idx:number=-1;
   getI(ww){
     this.idx=ww;
   }*/
  /* con;
   arrD =[1,2,3,4,5];
   getI(e){
     this.con=e;
   }
   click(){
     this.arrD[0] =1111;
   }*/
}

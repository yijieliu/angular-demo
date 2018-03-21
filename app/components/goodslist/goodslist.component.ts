import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:Router) { 

  }
  //@Input() list:number[];
  list:number[]=[1,2,3,4,5];
  ngOnInit() {
    //console.log(this.router.snapshot.params.goodsId);
  
}
goDetail(idx){
    this.router.navigate(['/gooddetail',idx]);
}
}
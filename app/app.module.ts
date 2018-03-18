import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { HomeComponent } from './components/home/home.component';
import { GetdataService } from './services/getdata.service';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    HomeComponent,
    HeadComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {MyServiceService} from "./my-service.service";
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
   capital: string;

  constructor(private myService: MyServiceService) {
  }

  bigTtile: string;


  getColumbia() {

    this.myService.getCapital().subscribe((data: any)=>this.capital=data.capital);

  }
}

import {Component, OnDestroy, OnInit, Output} from '@angular/core';
// @ts-ignore
import EventEmitter = require("node:events");

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  visibleStatus: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}

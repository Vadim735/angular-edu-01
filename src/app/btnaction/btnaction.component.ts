import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-btnaction',
  templateUrl: './btnaction.component.html',
  styleUrls: ['./btnaction.component.css']
})
export class BtnactionComponent implements OnInit,OnDestroy {
  title = 'Hello';
  title2 = 'Good Buy';
  count = 1;


  @Output()  pressButton=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() buttonPress=new EventEmitter<boolean>();

  //   emitClose(): void {
  //   this.buttonPress.emit(false);
  // }

    ngOnDestroy(): void {
  }

  onPressButton(): void {
    this.count++;
    if (this.count % 2 ===0) {
      this.pressButton.emit(this.title2);
    } else this.pressButton.emit(this.title);
  }
}

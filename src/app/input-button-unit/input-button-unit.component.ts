import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.less']
})
export class InputButtonUnitComponent implements OnInit {

  title = ''

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  constructor() {

  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

  ngOnInit() {

  }

}

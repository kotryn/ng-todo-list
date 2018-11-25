import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.less']
})
export class InputButtonUnitComponent implements OnInit {

  @Input() item: string;
  
  title = '';

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  constructor() {}

  @Output() submit = new EventEmitter<string>();

  ngOnInit() {
    this.title = this.item;
  }

}

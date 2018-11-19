import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() item: TodoItem;

  @Output() remove = new EventEmitter<TodoItem>();

  removeItem() {
    this.remove.emit(this.item);
  }

  ngOnInit() {
  }

}

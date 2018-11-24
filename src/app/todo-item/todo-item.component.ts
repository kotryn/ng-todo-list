import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  focus = true;

  @Input() item: TodoItem;

  @Output() remove = new EventEmitter<TodoItem>();

  @Output() check = new EventEmitter<any>();

  @Output() update = new EventEmitter<string>();

  removeItem() {
    this.remove.emit(this.item);
  }

  checkItem() {
    this.check.emit({
      item: this.item, 
      isChecked: {completed: !this.item.completed}
    });
  }

  updateItem(title: string) {
    console.log(title)
    //this.update.emit(title)
  }

  ngOnInit() {
  }

}

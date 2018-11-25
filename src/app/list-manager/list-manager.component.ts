import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service'
import { TodoItem } from '../interfaces/todo-item'

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.less']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  checkItem(event) {
    this.todoListService.updateItem(event.item, event.isChecked);
  }

  updateItem(event) {
    this.todoListService.updateItem(event.item, event.title);
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}

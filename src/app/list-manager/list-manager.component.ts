import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.less']
})
export class ListManagerComponent implements OnInit {

  constructor() { }

  todoList: TodoItem[] = [
    {title: 'install NodeJS', completed: false},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    this.todoList.push({ title });
  }

  ngOnInit() {
  }

}

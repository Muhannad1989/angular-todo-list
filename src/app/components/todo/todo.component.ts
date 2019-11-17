import { Component, OnInit } from '@angular/core';
// services that handel with api requests
import { TodoService } from './../../services/todo.service';
// structure of todo object
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService) {}

  // works as life cycle methods

  // get all items
  ngOnInit() {
    this.todoService.getTodo().subscribe(item => {
      this.todoList = item;
    });
  }

  // remove item
  deleteTodo(todoArg: Todo) {
    // remove from ui
    this.todoList = this.todoList.filter(ele => ele.id !== todoArg.id);
    // remove from server
    this.todoService.deleteTodo(todoArg).subscribe();
  }

  // add item
  addTodo(newTodo: Todo) {
    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todoList.push(todo);
    });
  }
}

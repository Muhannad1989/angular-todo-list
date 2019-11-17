import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) {}

  // set Dynamic class for ui 'is-complete'
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  // dit item
  onChange(todo) {
    // update ui
    todo.completed = !todo.completed;
    //update api
    this.todoService.toggleCompleted(todo).subscribe(t => {
      console.log(t);
    });
  }

  onDelete(todo) {
    // delete from ui
    // console.log('delete'); no need for this
    // delete from api
    this.deleteTodo.emit(todo);
  }
  ngOnInit() {}
}

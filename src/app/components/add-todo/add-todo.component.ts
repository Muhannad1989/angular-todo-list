import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  // binding title property with the form ngModel
  title: string;
  // export method to up level component 'todo component'
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  // once submits form
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };

    // emit to the up component
    this.addTodo.emit(todo);
  }
}

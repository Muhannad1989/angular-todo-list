import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './../models/Todo';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // set length of list
  limit_func(length) {
    return `?_limit=${length}`;
  }

  // url of todo list 'API'
  todoUrl: string = `https://jsonplaceholder.typicode.com/todos`;

  constructor(private http: HttpClient) {}

  // get all todo list
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.limit_func(20)}`);
  }

  // edit item completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOption);
  }

  // delete todo
  deleteTodo(todo: Todo) {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOption);
  }

  // add todo
  addTodo(todo: Todo): Observable<Todo> {
    const url = this.todoUrl;
    return this.http.post<Todo>(url, todo, httpOption);
  }
}

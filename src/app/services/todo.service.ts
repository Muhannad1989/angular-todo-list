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
  // variable
  limit_var = '?_limit=20';
  // function
  limit_func(length) {
    return `?_limit=${length}`;
  }
  todosUrl: string = `https://jsonplaceholder.typicode.com/todos`;
  constructor(private http: HttpClient) {}

  // get todos
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit_func(20)}`);
  }

  // toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOption);
  }

  // delete
  deleteTodo(todo: Todo) {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOption);
  }

  // add todo
  addTodo(todo: Todo): Observable<Todo> {
    const url = this.todosUrl;
    return this.http.post<Todo>(url, todo, httpOption);
  }
}

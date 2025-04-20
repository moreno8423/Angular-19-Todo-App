import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] =[];

  getTodos() : Todo[]{
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);


  }

  completeTodo(todo: Todo){
    todo.completed = (!todo.completed);
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);

    if(confirm('Are You Sure')){
      this.todos.splice(index, 1);


  }
}

  constructor() { }
}

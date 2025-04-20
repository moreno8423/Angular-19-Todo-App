import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  constructor(private todoService: TodoService){
    this.todos = this.todoService.getTodos();
  }


  todoTitle ='';

  todos: Todo[] = [];

  addTodo(){
    if(this.todoTitle.trim()!== ''){
      let newTodo ={
        id: Date.now(),
        title: this.todoTitle,
        completed: false,
      }
      this.todoService.addTodo(newTodo);
      this.todoTitle = '';
    }

  }// End AddTodo()

  completeTodo(todo: Todo){
    this.todoService.completeTodo(todo);


  } //End Complete Todo

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);

    } //End Delete Todo

     
  }



import { Component, OnInit } from '@angular/core';

import {Todo} from '../../model/Todo';
import { v4 as uuidV4} from 'uuid';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  todoTitle: string;

  constructor(private todoservice:  TodoService) { }

  ngOnInit(): void {
  }

  handleTodo(){
    const newTodo : Todo = {
      id : uuidV4(),
      title : this.todoTitle,
      isCompleted : false,
      date : new Date
    }

    this.todoservice.addTodo(newTodo);
    this.todoTitle = ""
  }

}

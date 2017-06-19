import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import * as todoReduce from 'goatstone/todo/reducers/todo'
import { ADD_TODO } from 'goatstone/todo/actions/todo'
import { Todo } from 'goatstone/todo/models/todo'

@Component({
  selector: 'goatstone-todo',
  template: `
  <md-toolbar color="warm" class="goatstone-todo-toolbar">
    <h1>{{title}}
    </h1>
  </md-toolbar>

  <md-card>
    <div *ngFor="let todo of todos$ | async">{{todo.name}}</div>
  </md-card>
  `
})

export class TodoComponent {
  private todos$: Observable<Todo[]>
  private title = 'TODO'
  constructor (private store: Store<todoReduce.State>) {
    this.todos$ = store.select(todoReduce.getTodos)
    this.makeTodo({name: 'Make a Todo List'})
    this.makeTodo({name: 'AAA'})
  }
  makeTodo (todo: Todo) {
    this.store.dispatch({ type: ADD_TODO, payload: todo})
  }
}

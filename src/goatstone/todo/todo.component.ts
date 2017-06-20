import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'goatstone/todo/models/todo'
import * as todoReduce from 'goatstone/todo/reducers/todo'
import * as todoAction from 'goatstone/todo/actions/todo'

@Component({
  selector: 'goatstone-todo',
  template: `
  <todo-header
    [config]=headerConfig
  ></todo-header>
  <todo-add
    (emitTodo)="makeTodo($event)"
  ></todo-add>

<md-list>
  <md-list-item *ngFor="let todo of todos$ | async; index as i">
    <h3 md-line> {{todo.name}} </h3>
    <button md-icon-button (click)="removeTodo(i)">
      <md-icon>clear</md-icon>
    </button>
    <p md-line>
      <span> {{todo.description}} </span>
    </p>
  </md-list-item>
</md-list>
`,
  styleUrls: [ './todo.css' ]
})

export class TodoComponent {
  private todos$: Observable<Todo[]>
  private headerConfig: any = {title: 'TODO'}

  constructor (private store: Store<todoReduce.State>) {
    this.todos$ = store.select(todoReduce.getTodos)
    this.store.dispatch({type: todoAction.ADD_TODO, payload: {name: 'Make a Todo item', description: 'Try to do this soon.'}})
  }
  removeTodo (index: number) {
    this.store.dispatch({type: todoAction.REMOVE_TODO, payload: index})
  }
  makeTodo (todo: Todo) {
    this.store.dispatch({type: todoAction.ADD_TODO, payload: todo})
  }
}

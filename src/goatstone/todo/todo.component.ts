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
  <md-toolbar color="warm" class="goatstone-todo-toolbar">
    <h1>{{pageTitle}}
    </h1>
  </md-toolbar>
  <md-card class="todo-form">
    <md-card-content>
      <h4>Add a Todo</h4>
      <form [formGroup]="todoForm" (ngSubmit)="makeTodo($event)">
        <md-input-container md-error>
          <label for="title">
            <span>*</span> Title
          </label>
          <input id="title" formControlName="name" mdInput autofocus maxlength="50">
        </md-input-container>
        <md-input-container>
          <label for="desc">Description</label>
          <textarea formControlName="description" mdInput maxlength="200">
          </textarea>
        </md-input-container>
        <button [disabled]="!todoForm.valid" type="submit" md-mini-fab>
          <md-icon>add</md-icon>
        </button>
      </form>
    </md-card-content>

  </md-card>

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
  private pageTitle = 'TODO'
  private todoForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  })
  constructor (private store: Store<todoReduce.State>, private fb: FormBuilder) {
    this.todos$ = store.select(todoReduce.getTodos)
    this.todoForm.valueChanges
      .subscribe(data => this.valueChange(data));
    this.store.dispatch({ type: todoAction.ADD_TODO, payload: {name: 'xxx', description: 'xxxxxxxxxxx xxxx'}})
  }
  valueChange (todo: any) {
    console.log('todo make', todo)
  }
  removeTodo (index: number) {
    this.store.dispatch({ type: todoAction.REMOVE_TODO, payload: index})
  }
  makeTodo (todo: any) {
    this.store.dispatch({ type: todoAction.ADD_TODO, payload: this.todoForm.value})
  }
}

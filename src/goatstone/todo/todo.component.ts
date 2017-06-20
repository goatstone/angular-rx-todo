import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as todoReduce from 'goatstone/todo/reducers/todo'
import { ADD_TODO } from 'goatstone/todo/actions/todo'
import { Todo } from 'goatstone/todo/models/todo'

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
  <md-card>
    <div *ngFor="let todo of todos$ | async">
      <h4>{{todo.name}}</h4>
      <div *ngIf="todo.description">
        {{todo.description}}
      </div>
    </div>
  </md-card>`,
  styles: [`
    .todo-form {
      background: #aaa;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }`,
  `
    .todo-form md-card-header {
      background: #ccc;
      width: 100%;
    }`,
    `
    .todo-form md-card-content{
      padding: 12px;
      min-width: 250px;
      background: #ddd;
    }
    .todo-form md-card-content form{
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      width: 100%;
    }
    .todo-form md-card-content form md-input-container{
      background: #fff;
      padding: 0 12px;
      margin: 6px;
      overflow: hidden;
      border-radius: 6px;
      border: 6px solid #fff;
    }
    .todo-form md-card-content form md-input-container label{
      color: #999;
    }
    `
  ]
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
  }
  valueChange (todo: any) {
    console.log('todo make', todo)
  }
  makeTodo (todo: any) {
    this.store.dispatch({ type: ADD_TODO, payload: this.todoForm.value})
  }
}

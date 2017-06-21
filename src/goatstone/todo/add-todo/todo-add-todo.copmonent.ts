import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'goatstone/todo/models/todo'

@Component({
  selector: 'todo-add',
  template: `
  <md-card class="todo-form">
    <md-card-content>
      <h4>Add a Todo</h4>
      
      <form [formGroup]="todoForm" (ngSubmit)="sendData(todoForm.value)">

        <div class="col-one">
          <md-input-container md-error>
            <label for="title">
              <span>*</span> Title
            </label>
            <input id="title" formControlName="name" mdInput autofocus maxlength="50">
          </md-input-container>
          <div class="form-element-container">
            <label for="il">Importance Level </label>
            <md-select id="il" formControlName="importanceLevel" placeHoder=1>
              <md-option *ngFor="let level of levels" 
              [value]=level.value>{{ level.title }}</md-option>
            </md-select>
          </div>
        </div>

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
`,
  styleUrls: [ './todo-add-todo.css' ]
})

export default class TodoAdd {
  @Output() emitTodo: EventEmitter<Todo> = new EventEmitter()
  readonly levels = [
    {value: 0, title: 'Low'},
    {value: 1, title: 'Medium'},
    {value: 2, title: 'High'}
    ]
  private todoForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    importanceLevel: 0
  })

  constructor (private fb: FormBuilder) {
    this.todoForm.valueChanges
      .subscribe(data => this.valueChange(data));
  }
  sendData (todo: Todo) {
      this.emitTodo.emit(todo)
  }
  valueChange (todo: any) {
    // console.log('todo make', todo)
  }
}

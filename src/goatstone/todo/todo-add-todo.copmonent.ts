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
`,
  styleUrls: [ './todo-add-todo.css' ]
})

export default class TodoAdd {
  @Output() emitTodo: EventEmitter<Todo> = new EventEmitter();  
  private todoForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
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

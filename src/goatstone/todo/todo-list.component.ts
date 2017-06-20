import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from 'goatstone/todo/models/todo'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'todo-list',
  template: `
<md-list>
  <md-list-item *ngFor="let todo of todos$ | async; index as i">
    <h3 md-line> {{todo.name}} </h3>
    <button md-icon-button (click)="remove(i)">
      <md-icon>clear</md-icon>
    </button>
    <p md-line>
      <span> {{todo.description}} </span>
    </p>
  </md-list-item>
</md-list>
`
})

export default class TodoList {
  @Input() todos$: Observable<Todo[]>
  @Output() removeTodo: EventEmitter<number> = new EventEmitter()

  constructor () {}
  remove (i: number) {
    this.removeTodo.emit(i)
  }
}

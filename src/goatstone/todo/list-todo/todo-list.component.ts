import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from 'goatstone/todo/models/todo'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'todo-list',
  template: `
<md-list>
  <md-list-item *ngFor="let todo of todos$ | async; index as i"
   class="{{ levelStyles[todo.importanceLevel] }}">
    <h3 md-line> {{todo.name}} </h3>
    <button md-icon-button (click)="remove(i)">
      <md-icon>clear</md-icon>
    </button>
    <p md-line>
      <span> {{todo.description}} </span>
    </p>
  </md-list-item>
</md-list>
`,
  styles: [`
    .level-0 {
      background: #fdd;
    }
    .level-1 {
      background: #faa;
    }
    .level-2 {
      background: #f77;
    }
    `
  ]
})

export default class TodoList {
  @Input() todos$: Observable<Todo[]>
  @Output() removeTodo: EventEmitter<number> = new EventEmitter()
  readonly levelStyles = ['level-0', 'level-1', 'level-2',]
  constructor () {}
  remove (i: number) {
    this.removeTodo.emit(i)
  }
}

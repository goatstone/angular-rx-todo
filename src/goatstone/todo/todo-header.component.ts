import { Component, Input } from '@angular/core'

@Component({
  selector: 'todo-header',
  template: `
  <md-toolbar color="warm" class="goatstone-todo-toolbar">
    <h1>{{config.title}}</h1>
  </md-toolbar>
`
})

export default class TodoHeader {
  @Input() config: any
  constructor () {}
}

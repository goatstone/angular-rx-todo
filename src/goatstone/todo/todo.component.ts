import { Component } from '@angular/core';

@Component({
  selector: 'goatstone-todo',
  template: `<h1>Todo {{name}}</h1>`
})
export class TodoComponent { name = 'TodoComponent'; }
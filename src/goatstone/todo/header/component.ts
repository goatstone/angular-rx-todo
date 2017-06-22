import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-header',
  template: `
  <md-toolbar>
    <h1>{{config.title}}</h1>
    <div class="icon-container">
      <button (click)=openDialog(ADD) md-mini-fab>
        <md-icon>add</md-icon>
      </button>
      <md-icon
        (click)=openDialog(INFO)
      >menu</md-icon>
    </div>
  </md-toolbar>
`,
  styleUrls: [`./style.css`]
})

export class TodoHeader {
  @Input() config: any
  @Output() emitOpenDialog: EventEmitter<string> = new EventEmitter()
  readonly ADD = 'add'
  readonly INFO = 'info'
  constructor () {}
  openDialog (whichDialog: string) {
    this.emitOpenDialog.emit(whichDialog)
  }
}

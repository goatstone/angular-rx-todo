import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'goatstone/todo/models/todo'
import * as todoReduce from 'goatstone/todo/reducers/todo'
import * as todoAction from 'goatstone/todo/actions/todo'
import { DialogService } from 'goatstone/todo/dialog/service'
import { InformationDialog } from 'goatstone/todo/dialog/information'
import { AddTodoDialog } from 'goatstone/todo/dialog/add-todo'

@Component({
  selector: 'goatstone-todo',
  template: `
  <todo-header
    [config]=headerConfig
    (emitOpenDialog)="openDialog($event)"
  ></todo-header>
  <todo-list
    [todos$]=todos$
    (removeTodo)="removeTodo($event)"
  ></todo-list>
`,
  styleUrls: [ './todo.css' ]
})

export class TodoComponent {
  private todos$: Observable<Todo[]>
  private headerConfig: any = {title: 'TODO'}

  constructor (private store: Store<todoReduce.State>, private ds: DialogService) {
    this.todos$ = store.select(todoReduce.getTodos)
    // this.openInformationDialog()
    this.store.dispatch({type: todoAction.ADD_TODO, payload: {name: 'Make a Todo item', description: 'Try to do this soon.'}})
  }
  private openDialog (which: string) {
    if(which === 'add'){
      this.ds.openDialog(AddTodoDialog)
      .subscribe((res: any) => {
        if(res) {
          this.store.dispatch({type: todoAction.ADD_TODO, payload: res})
        }
      })
    } else if(which === 'info') {
      this.ds.openDialog(InformationDialog)
    }
  }
  removeTodo (index: number) {
    this.store.dispatch({type: todoAction.REMOVE_TODO, payload: index})
  }
  makeTodo (todo: Todo) {
    this.store.dispatch({type: todoAction.ADD_TODO, payload: todo})
  }
}

import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
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
`
})

export class TodoComponent {
  private todos$: Observable<Todo[]>
  private headerConfig: any = {title: 'TODO'}

  constructor (
    private store: Store<todoReduce.State>, 
    private ds: DialogService, 
    private snackBar: MdSnackBar
    ) {
    this.todos$ = store.select(todoReduce.getTodos)
    this.todos$.subscribe(res => {
      this.openSnackBar('Todo Added', '')
    })
    this.openDialog('add')
    this.store.dispatch(
      {type: todoAction.ADD_TODO, payload: 
        {name: 'Make a Todo item', description: 'Try to do this soon.', importanceLevel: 0}})
    this.store.dispatch(
      {type: todoAction.ADD_TODO, payload: 
        {name: 'ZZZ', description: 'z.', importanceLevel: 1}})
    this.store.dispatch(
      {type: todoAction.ADD_TODO, payload: 
        {name: 'ZZZ', description: 'z.', importanceLevel: 2}})
    this.openSnackBar('Welcome to todo!', '')
  }
  private openDialog (which: string) {
    if(which === 'add'){
      this.ds.openDialog(AddTodoDialog)
      .subscribe((todo: Todo) => {
        if(todo) {
          this.store.dispatch({type: todoAction.ADD_TODO, payload: todo})
        }
      })
    } else if(which === 'info') {
      this.ds.openDialog(InformationDialog)
    }
  }
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  private removeTodo (index: number) {
    this.store.dispatch({type: todoAction.REMOVE_TODO, payload: index})
  }
  private makeTodo (todo: Todo) {
    this.store.dispatch({type: todoAction.ADD_TODO, payload: todo})
  }
}

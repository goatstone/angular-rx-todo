import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { MaterialModule } from '@angular/material'
import { TodoComponent } from 'goatstone/todo/todo.component'
import { reducer } from 'goatstone/todo/reducers/todo'
import { ReactiveFormsModule } from '@angular/forms'
import { TodoHeader } from 'goatstone/todo/header/component'
import { TodoAdd }  from 'goatstone/todo/add-todo/todo-add-todo.copmonent'
import { TodoList } from 'goatstone/todo/list-todo/todo-list.component'
import { DialogService } from 'goatstone/todo/dialog/service'
import { InformationDialog } from 'goatstone/todo/dialog/information'
import { AddTodoDialog } from 'goatstone/todo/dialog/add-todo'

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.provideStore(reducer),
    ReactiveFormsModule
  ],
  declarations: [
    TodoComponent,
    TodoHeader,
    TodoAdd,
    TodoList,
    InformationDialog,
    AddTodoDialog
    ],
  providers: [
    DialogService
    ],
  entryComponents: [
    InformationDialog,
    AddTodoDialog
    ],
  bootstrap:    [ TodoComponent ]
})
export class TodoModule { }

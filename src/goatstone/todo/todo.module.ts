import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { MaterialModule } from '@angular/material'
import { EffectsModule } from '@ngrx/effects'

import { TodoComponent } from 'goatstone/todo/todo.component'
import { reducer } from 'goatstone/todo/reducers/todo'
import { ReactiveFormsModule } from '@angular/forms'
import { TodoHeader } from 'goatstone/todo/header/component'
import { TodoAdd }  from 'goatstone/todo/add-todo/todo-add-todo.copmonent'
import { TodoList } from 'goatstone/todo/list-todo/todo-list.component'
import { DialogService } from 'goatstone/todo/dialog/service'
import { InformationDialog } from 'goatstone/todo/dialog/information'
import { AddTodoDialog } from 'goatstone/todo/dialog/add-todo'
import { TodoEffects } from 'goatstone/todo/effects/todo'
import { SnackBarService } from 'goatstone/todo/snackbar/service'

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.provideStore(reducer),
    ReactiveFormsModule,
    EffectsModule.run(TodoEffects)
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
    DialogService,
    SnackBarService
    ],
  entryComponents: [
    InformationDialog,
    AddTodoDialog
    ],
  bootstrap:    [ TodoComponent ]
})
export class TodoModule { }

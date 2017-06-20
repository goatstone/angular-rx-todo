import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { MaterialModule } from '@angular/material'
import { TodoComponent } from 'goatstone/todo/todo.component'
import { reducer } from 'goatstone/todo/reducers/todo'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.provideStore(reducer),
    ReactiveFormsModule
  ],
  declarations: [ TodoComponent ],
  bootstrap:    [ TodoComponent ]
})
export class TodoModule { }

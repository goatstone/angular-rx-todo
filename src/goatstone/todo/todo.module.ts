import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { MaterialModule } from '@angular/material'
import { TodoComponent } from 'goatstone/todo/todo.component'
import { reducer } from 'goatstone/todo/reducers/todo'

@NgModule({
  imports:      [
    BrowserModule,
    MaterialModule,
    StoreModule.provideStore(reducer)
    ],
  declarations: [ TodoComponent ],
  bootstrap:    [ TodoComponent ]
})
export class TodoModule { }

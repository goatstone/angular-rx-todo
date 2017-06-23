import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { SnackBarService } from 'goatstone/todo/snackbar/service'

import * as todo from 'goatstone/todo/actions/todo';

@Injectable()
export class TodoEffects {
  private message = {
    add: 'Todo Added',
    remove: 'Todo Removed'
  }
  @Effect()
  addTodo$: Observable<Action> = this.actions$
    .ofType(todo.ADD_TODO)
    .map(toPayload)
    .map(query => {
      console.log('q', query)
      this.snackBar.show(query.name, this.message.add)
      return query
  })
  @Effect()
  removeTodo$: Observable<Action> = this.actions$
    .ofType(todo.REMOVE_TODO)
    .map(toPayload)
    .map(query => {
      console.log('q', query)
      this.snackBar.show(this.message.remove)
      return query
  })

  constructor(private actions$: Actions, private snackBar: SnackBarService) { }
}

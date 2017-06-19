import { Action } from '@ngrx/store'
import {Todo} from 'goatstone/todo/models/todo'
import * as todoAction from 'goatstone/todo/actions/todo'

export interface State {
    todos: Todo[]
}
const initialState: State = {
    todos: []
}
export function reducer(state = initialState, action: Action): State{
    switch (action.type) {
        case todoAction.ADD_TODO: {
            return {todos: [...state.todos, action.payload]}
        }
        default: {
            return state
        }
    }
}
export const getTodos = (state: State) => state.todos

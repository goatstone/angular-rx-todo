import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Todo } from 'goatstone/todo/models/todo'

@Component({
    selector: 'add-todo-dialog',
    template: `
        <todo-add
            (emitTodo)="makeTodo($event)"
        ></todo-add>
        <button type="button" md-button 
            (click)="close($event)">Cancel</button>
    `
})
export class AddTodoDialog {
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<AddTodoDialog>) { }
    private makeTodo (todo: Todo) {
        this.dialogRef.close(todo)
    }
    private close (e: any) {
        this.dialogRef.close(false)
    }
}
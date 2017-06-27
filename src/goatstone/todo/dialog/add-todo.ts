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
            (click)="close($event)">Close</button>
    `,
    styles: [`
    :host {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: rgb(0, 188, 212);
    }
    :host /deep/ button.mat-mini-fab {
        color: white;
        background: rgb(0, 188, 212);
    }
    `]
})
export class AddTodoDialog {
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<AddTodoDialog>) { }
    public makeTodo (todo: Todo) {
        this.dialogRef.close(todo)
    }
    public close (e: any) {
        this.dialogRef.close(false)
    }
}
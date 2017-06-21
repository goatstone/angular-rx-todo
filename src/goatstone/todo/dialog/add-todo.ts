import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

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
//    public instance: AddTodoDialog

    constructor(public dialogRef: MdDialogRef<AddTodoDialog>) { }
    private makeTodo (e: any) {
        this.dialogRef.close(e)
    }
    private close (e: any) {
        this.dialogRef.close(false)
    }
}
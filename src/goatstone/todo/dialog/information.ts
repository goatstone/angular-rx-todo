import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'information-dialog',
    template: `
        <md-icon>build</md-icon>
        <h3>{{title}}</h3>
        <p>{{message}}</p>
        <button type="button" 
            (click)="dialogRef.close(true)">CLOSE</button>
    `,
    styles: [`
    :host {
        display: flex;
        flex-direction: column;
    }
    h3, p {
        color: rgba(0, 0, 0, 0.6);
    }
    button {
        color: rgb(0, 188, 212);
        border-width: 0;
        background: none;
        max-width: 150px;
        align-self: flex-end;
    }
    `]
})
export class InformationDialog {
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<InformationDialog>) {
        this.title = 'Todo'
        this.message = 'Create todo items with a title, description and importance level.'
    }
}
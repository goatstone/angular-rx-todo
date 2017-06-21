import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'information-dialog',
    template: `
        <h3>{{title}}</h3>
        <p>{{message}}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
    `
})
export class InformationDialog {
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<InformationDialog>) {
        this.title = 'Todo'
        this.message = 'Create todo items with a title, description and importance level.'
    }
}
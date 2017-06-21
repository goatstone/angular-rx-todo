import {Component, Injectable, ViewContainerRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Todo } from 'goatstone/todo/models/todo'

@Injectable()
export class DialogService {
    dialogRef: MdDialogRef<Component>
    // config: MdDialogConfig
    constructor(private dialog: MdDialog) {
        // this.config = new MdDialogConfig()
    }
    public close(): void {
        this.dialog.closeAll()
    }
    public openDialog(content: any):
    Observable<Todo> {
        this.dialogRef = this.dialog.open(content)
        return this.dialogRef.afterClosed()
    }
}

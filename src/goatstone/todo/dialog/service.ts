import {Component, Injectable, ViewContainerRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

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
    Observable<boolean> {
        this.dialogRef = this.dialog.open(content)
        return this.dialogRef.afterClosed()
    }
}

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class SnackBarService {
  public readonly showDuration = 2000
  constructor(private snackBar: MdSnackBar) {}
  public show (message: string, action = '') {
    this.snackBar.open(message, action, {
      duration: this.showDuration
    })
  }
}

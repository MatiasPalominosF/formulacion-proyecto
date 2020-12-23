import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ConfirmationDialogComponent],
  exports: [ConfirmationDialogComponent],
  imports: [
    CommonModule
  ]
})
export class ConfirmationDialogModule { }

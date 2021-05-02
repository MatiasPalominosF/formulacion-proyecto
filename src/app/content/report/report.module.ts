import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ReportListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'report-list',
        component: ReportListComponent
      }
    ]),
  ]
})
export class ReportModule { }

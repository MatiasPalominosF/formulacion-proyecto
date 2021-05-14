import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancellationListComponent } from './cancellation-list/cancellation-list.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [CancellationListComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild([
      {
        path: 'cancellation-list',
        component: CancellationListComponent,
      },
    ]),
  ]
})
export class CancellationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancellationListComponent } from './cancellation-list/cancellation-list.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { CardModule } from '../partials/general/card/card.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { FilterDatePipe } from 'src/app/_pipe/filter-date.pipe';



@NgModule({
  declarations: [CancellationListComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CardModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'cancellation-list',
        component: CancellationListComponent,
      },
    ]),
  ]
})
export class CancellationModule { }

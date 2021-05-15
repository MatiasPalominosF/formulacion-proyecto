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
import { FilterPipeModule } from 'src/app/_pipe/filter-pipe.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { OnlyCancellationListComponent } from './only-cancellation-list/only-cancellation-list.component';



@NgModule({
  declarations: [CancellationListComponent, OnlyCancellationListComponent],
  imports: [
    FilterPipeModule,
    CommonModule,
    BreadcrumbModule,
    CardModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    UiSwitchModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'cancellation-list',
        component: CancellationListComponent,
      },
      {
        path: 'only-cancellation-list',
        component: OnlyCancellationListComponent,
      },
    ]),
  ]
})
export class CancellationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListComponent } from './sale-list/sale-list.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from '../partials/general/card/card.module';



@NgModule({
  declarations: [SaleListComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CardModule,
    NgbModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'sale-list',
        component: SaleListComponent
      }
    ]),
  ]
})
export class SaleModule { }

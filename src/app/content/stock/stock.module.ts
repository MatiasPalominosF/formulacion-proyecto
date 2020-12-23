import { BlockTemplateComponent } from './../../_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { BreadcrumbModule } from './../../_layout/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';



@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'stock-list',
        component: StockListComponent
      }
    ]),
  ]
})
export class StockModule { }

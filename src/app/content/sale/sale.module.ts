import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListComponent } from './sale-list/sale-list.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbModalModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from '../partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaySaleComponent } from './pay-sale/pay-sale.component';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { FilterPipeModule } from 'src/app/_pipe/filter-pipe.module';
import { DirectiveModule } from 'src/app/_directives/directive.module';



@NgModule({
  declarations: [SaleListComponent, PaySaleComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CardModule,
    NgbModule,
    FilterPipeModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    DirectiveModule,
    FormsModule,
    NgbModalModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'sale-list',
        component: SaleListComponent
      }
    ]),
  ], providers: [ConfirmationDialogService]
})
export class SaleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreViewComponent } from './my-store-view/my-store-view.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '../partials/general/card/card.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'src/app/_pipe/filter-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { PayCartModalComponent } from './pay-cart-modal/pay-cart-modal.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PersonalizedOrderComponent } from './personalized-order/personalized-order.component';
import { DirectiveModule } from 'src/app/_directives/directive.module';



@NgModule({
  declarations: [MyStoreViewComponent, PayCartModalComponent, PersonalizedOrderComponent],
  imports: [
    CommonModule,
    CardModule,
    NgbModule,
    FormsModule,
    UiSwitchModule,
    DirectiveModule,
    ReactiveFormsModule,
    FilterPipeModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'mi-tienda/:uid',
        component: MyStoreViewComponent
      },
    ]),
  ]
})
export class ViewStoreModule { }

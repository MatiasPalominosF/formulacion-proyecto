import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreViewComponent } from './my-store-view/my-store-view.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '../partials/general/card/card.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'src/app/_pipe/filter-pipe.module';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';



@NgModule({
  declarations: [MyStoreViewComponent],
  imports: [
    CommonModule,
    CardModule,
    NgbModule,
    FormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    FilterPipeModule,
    RouterModule.forChild([
      {
        path: 'mi-tienda/:uid',
        component: MyStoreViewComponent
      },
    ]),
  ]
})
export class ViewStoreModule { }

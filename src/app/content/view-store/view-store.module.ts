import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreViewComponent } from './my-store-view/my-store-view.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '../partials/general/card/card.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MyStoreViewComponent],
  imports: [
    CommonModule,
    CardModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: 'mi-tienda/:uid',
        component: MyStoreViewComponent
      },
    ]),
  ]
})
export class ViewStoreModule { }

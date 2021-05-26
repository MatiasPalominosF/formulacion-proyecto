import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreViewComponent } from './my-store-view/my-store-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MyStoreViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'mi-tienda/:uid',
        component: MyStoreViewComponent
      },
    ]),
  ]
})
export class ViewStoreModule { }

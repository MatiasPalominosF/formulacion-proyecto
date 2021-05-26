import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreComponent } from './my-store/my-store.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [MyStoreComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild([
      {
        path: 'my-store',
        component: MyStoreComponent
      },
    ]),
  ]
})
export class StoreModule { }
